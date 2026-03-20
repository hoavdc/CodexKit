#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ---- Read version from package.json ----
CODEXKIT_VERSION="unknown"
if [ -f "$ROOT_DIR/package.json" ]; then
  CODEXKIT_VERSION=$(grep '"version"' "$ROOT_DIR/package.json" | head -1 | sed 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/')
fi

echo ""
echo "================================================"
echo "   CodexKit v${CODEXKIT_VERSION} — Work Operating Kit"
echo "================================================"
echo ""
echo "   Turn Codex and ChatGPT into disciplined"
echo "   specialists for your daily work."
echo ""
echo "   81 skills  |  9 playbooks  |  10 templates"
echo "   10 automations  |  6 starter workspaces"
echo ""
echo "================================================"
echo ""

# ---- Check if Codex CLI is installed ----
CODEX_FOUND=0

# Method 1: command -v (standard PATH check)
if command -v codex &>/dev/null; then
  CODEX_FOUND=1
fi

# Method 2: Common npm global paths
if [ "$CODEX_FOUND" = "0" ]; then
  for check_path in \
    "$HOME/.npm-global/bin/codex" \
    "/usr/local/bin/codex" \
    "$HOME/.local/bin/codex" \
    "$HOME/.nvm/versions/node/*/bin/codex" \
    "$HOME/.fnm/node-versions/*/installation/bin/codex"; do
    # Use glob expansion
    for p in $check_path; do
      if [ -x "$p" ] 2>/dev/null; then
        CODEX_FOUND=1
        break 2
      fi
    done
  done
fi

# Method 3: Try npx resolution
if [ "$CODEX_FOUND" = "0" ]; then
  if npx --no-install codex --version &>/dev/null 2>&1; then
    CODEX_FOUND=1
  fi
fi

# Method 4: npm root -g fallback
if [ "$CODEX_FOUND" = "0" ]; then
  NPM_GLOBAL_ROOT=$(npm root -g 2>/dev/null || true)
  if [ -n "$NPM_GLOBAL_ROOT" ] && [ -x "$(dirname "$NPM_GLOBAL_ROOT")/bin/codex" ]; then
    CODEX_FOUND=1
  fi
fi

if [ "$CODEX_FOUND" = "0" ]; then
  echo "  [!] Codex CLI was not detected on this system."
  echo ""
  echo "  CodexKit requires OpenAI Codex to work."
  echo "  Install it first, then re-run this script."
  echo ""
  echo "  Step 1: Install Node.js 20+ from https://nodejs.org"
  echo "  Step 2: Run this command:"
  echo ""
  echo "      npm install -g @openai/codex"
  echo ""
  echo "  Step 3: Verify with:   codex --version"
  echo "  Step 4: Re-run:        bash ./START-HERE.sh"
  echo ""
  echo "  Docs: https://github.com/openai/codex"
  echo ""
  exit 1
fi

echo "  [OK] Codex detected. Proceeding with skill installation..."
echo ""

# ---- Install skills ----
bash "$ROOT_DIR/scripts/install-skills.sh"

echo ""
echo "================================================"
echo "   Installation complete!"
echo "================================================"
echo ""
echo "  Next steps:"
echo ""
echo "    1. Restart Codex (or close and reopen the terminal)"
echo "    2. Type /skills in Codex to confirm all 81 skills"
echo "    3. Open skill-finder.md to browse skills by situation"
echo "    4. Optional: bash ./CREATE-WORKSPACE.sh"
echo "       to scaffold a department workspace"
echo ""
echo "  Quick start (Vietnamese): HUONG-DAN-NHANH.md"
echo "  Full docs: README.md"
echo ""
