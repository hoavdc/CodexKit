#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${CODEXKIT_SOURCE_DIR:-"$(cd "$(dirname "${BASH_SOURCE[0]}")/../skills" && pwd)"}"
DESTINATION="${CODEXKIT_DESTINATION:-"$HOME/.agents/skills"}"
FORCE="${CODEXKIT_FORCE:-0}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --source)
      SOURCE_DIR="$2"
      shift 2
      ;;
    --destination)
      DESTINATION="$2"
      shift 2
      ;;
    --force)
      FORCE=1
      shift
      ;;
    *)
      echo "Unknown argument: $1" >&2
      echo "Usage: bash ./scripts/install-skills.sh [--source PATH] [--destination PATH] [--force]" >&2
      exit 1
      ;;
  esac
done

SOURCE_DIR="$(cd "$SOURCE_DIR" && pwd)"

mkdir -p "$DESTINATION"
INSTALLED_COUNT=0

echo "Installing CodexKit skills from $SOURCE_DIR"
echo "Destination: $DESTINATION"

for skill_dir in "$SOURCE_DIR"/*; do
  [ -d "$skill_dir" ] || continue

  skill_name="$(basename "$skill_dir")"
  target="$DESTINATION/$skill_name"

  if [[ -e "$target" && "$FORCE" != "1" ]]; then
    echo "Skipping $skill_name because it already exists. Use --force or CODEXKIT_FORCE=1 to overwrite."
    continue
  fi

  rm -rf "$target"
  cp -R "$skill_dir" "$target"
  INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
  echo "Installed $skill_name"
done

echo "CodexKit skill installation complete. Installed $INSTALLED_COUNT skills."
echo "Next steps:"
echo "1. Restart Codex if the skills do not appear immediately."
echo "2. Type /skills in Codex to confirm installation."
echo "3. Optional: run bash ./scripts/quick-start.sh --list to scaffold a starter workspace."
