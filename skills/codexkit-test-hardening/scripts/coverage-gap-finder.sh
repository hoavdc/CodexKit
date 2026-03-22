#!/usr/bin/env bash
# coverage-gap-finder.sh
# Identifies untested or under-tested code paths in a project.
#
# Usage:  bash scripts/coverage-gap-finder.sh [--lang ts|py|go] [--threshold 80] [src_dir]
#
# Supports: TypeScript (c8/istanbul), Python (coverage.py), Go (go test)
#
# Output:  Markdown report with files below threshold sorted by gap severity.

set -euo pipefail

LANG_HINT="${1:---lang}"
THRESHOLD="${2:-80}"
SRC_DIR="${3:-.}"
REPORT_FILE="coverage-gap-report.md"

detect_lang() {
  if [ -f "tsconfig.json" ] || [ -f "package.json" ]; then
    echo "ts"
  elif [ -f "setup.py" ] || [ -f "pyproject.toml" ] || [ -f "requirements.txt" ]; then
    echo "py"
  elif [ -f "go.mod" ]; then
    echo "go"
  else
    echo "unknown"
  fi
}

if [ "$LANG_HINT" = "--lang" ]; then
  LANG=$(detect_lang)
else
  LANG="$LANG_HINT"
fi

echo "# Coverage Gap Report" > "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Generated: $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$REPORT_FILE"
echo "Threshold: ${THRESHOLD}%" >> "$REPORT_FILE"
echo "Language: ${LANG}" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

case "$LANG" in
  ts)
    echo "Running TypeScript coverage..."
    npx c8 --reporter=json --report-dir=.coverage-tmp npm test 2>/dev/null || true
    if [ -f ".coverage-tmp/coverage-final.json" ]; then
      echo "## Files Below ${THRESHOLD}% Coverage" >> "$REPORT_FILE"
      echo "" >> "$REPORT_FILE"
      echo "| File | Lines | Branches | Functions | Gap |" >> "$REPORT_FILE"
      echo "|------|-------|----------|-----------|-----|" >> "$REPORT_FILE"
      node -e "
        const data = require('./.coverage-tmp/coverage-final.json');
        const threshold = ${THRESHOLD};
        const gaps = [];
        for (const [file, info] of Object.entries(data)) {
          const stmts = Object.values(info.s);
          const total = stmts.length;
          const covered = stmts.filter(x => x > 0).length;
          const pct = total > 0 ? Math.round(100 * covered / total) : 100;
          if (pct < threshold) {
            gaps.push({ file: file.replace(process.cwd() + '/', ''), pct, gap: threshold - pct });
          }
        }
        gaps.sort((a, b) => b.gap - a.gap);
        gaps.forEach(g => console.log('| ' + g.file + ' | ' + g.pct + '% | - | - | ' + g.gap + 'pp |'));
      " >> "$REPORT_FILE"
      rm -rf .coverage-tmp
    else
      echo "⚠ No coverage data generated. Ensure tests exist and c8 is installed." >> "$REPORT_FILE"
    fi
    ;;

  py)
    echo "Running Python coverage..."
    python -m coverage run -m pytest "$SRC_DIR" 2>/dev/null || true
    python -m coverage json -o .coverage-tmp.json 2>/dev/null || true
    if [ -f ".coverage-tmp.json" ]; then
      echo "## Files Below ${THRESHOLD}% Coverage" >> "$REPORT_FILE"
      echo "" >> "$REPORT_FILE"
      echo "| File | Coverage | Gap |" >> "$REPORT_FILE"
      echo "|------|----------|-----|" >> "$REPORT_FILE"
      python3 -c "
import json
with open('.coverage-tmp.json') as f:
    data = json.load(f)
threshold = ${THRESHOLD}
gaps = []
for fname, info in data.get('files', {}).items():
    pct = info.get('summary', {}).get('percent_covered', 100)
    if pct < threshold:
        gaps.append((fname, round(pct, 1), round(threshold - pct, 1)))
gaps.sort(key=lambda x: -x[2])
for g in gaps:
    print(f'| {g[0]} | {g[1]}% | {g[2]}pp |')
" >> "$REPORT_FILE"
      rm -f .coverage-tmp.json
    else
      echo "⚠ No coverage data. Ensure pytest and coverage are installed." >> "$REPORT_FILE"
    fi
    ;;

  go)
    echo "Running Go coverage..."
    go test -coverprofile=.coverage-tmp.out ./... 2>/dev/null || true
    if [ -f ".coverage-tmp.out" ]; then
      echo "## Files Below ${THRESHOLD}% Coverage" >> "$REPORT_FILE"
      echo "" >> "$REPORT_FILE"
      echo "| Package | Coverage | Gap |" >> "$REPORT_FILE"
      echo "|---------|----------|-----|" >> "$REPORT_FILE"
      go tool cover -func=.coverage-tmp.out | grep -v "total:" | awk -v thresh="$THRESHOLD" '
        {
          pct = $3 + 0;
          if (pct < thresh) {
            gap = thresh - pct;
            printf "| %s | %.1f%% | %.1fpp |\n", $1, pct, gap;
          }
        }
      ' | sort -t'|' -k4 -rn >> "$REPORT_FILE"
      rm -f .coverage-tmp.out
    else
      echo "⚠ No coverage data. Ensure go test works." >> "$REPORT_FILE"
    fi
    ;;

  *)
    echo "⚠ Could not detect project language. Pass --lang [ts|py|go]." >> "$REPORT_FILE"
    ;;
esac

echo "" >> "$REPORT_FILE"
echo "## Recommended Actions" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "1. Prioritize files with the largest coverage gap" >> "$REPORT_FILE"
echo "2. Focus on **branches** — untested conditionals hide bugs" >> "$REPORT_FILE"
echo "3. Add integration tests for cross-module boundaries" >> "$REPORT_FILE"
echo "4. Set CI gate: fail if any file drops below ${THRESHOLD}%" >> "$REPORT_FILE"

echo ""
echo "Report written to: $REPORT_FILE"
cat "$REPORT_FILE"
