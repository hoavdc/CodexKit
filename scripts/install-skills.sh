#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${1:-"$(cd "$(dirname "${BASH_SOURCE[0]}")/../skills" && pwd)"}"
DESTINATION="${CODEXKIT_DESTINATION:-"$HOME/.codex/skills"}"

mkdir -p "$DESTINATION"

echo "Installing CodexKit skills from $SOURCE_DIR"
echo "Destination: $DESTINATION"

for skill_dir in "$SOURCE_DIR"/*; do
  [ -d "$skill_dir" ] || continue

  skill_name="$(basename "$skill_dir")"
  target="$DESTINATION/$skill_name"

  rm -rf "$target"
  cp -R "$skill_dir" "$target"
  echo "Installed $skill_name"
done

echo "CodexKit skill installation complete."
