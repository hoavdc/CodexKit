#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${CODEXKIT_WORKSPACES_DIR:-"$(cd "$(dirname "${BASH_SOURCE[0]}")/../workspaces" && pwd)"}"
STARTER=""
DESTINATION=""
FORCE=0
LIST=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --starter)
      STARTER="$2"
      shift 2
      ;;
    --destination)
      DESTINATION="$2"
      shift 2
      ;;
    --source)
      SOURCE_DIR="$2"
      shift 2
      ;;
    --force)
      FORCE=1
      shift
      ;;
    --list)
      LIST=1
      shift
      ;;
    *)
      echo "Unknown argument: $1" >&2
      echo "Usage: bash ./scripts/quick-start.sh [--list] [--starter NAME] [--destination PATH] [--force]" >&2
      exit 1
      ;;
  esac
done

SOURCE_DIR="$(cd "$SOURCE_DIR" && pwd)"

if [[ "$LIST" == "1" ]]; then
  for starter_dir in "$SOURCE_DIR"/*; do
    [[ -d "$starter_dir" ]] || continue
    basename "$starter_dir"
  done | sort
  exit 0
fi

if [[ -z "$STARTER" ]]; then
  echo "Starter is required. Use --list to see available starter workspaces." >&2
  exit 1
fi

if [[ -z "$DESTINATION" ]]; then
  echo "Destination is required. Example: bash ./scripts/quick-start.sh --starter project-management-office --destination ./acme-pmo" >&2
  exit 1
fi

STARTER_PATH="$SOURCE_DIR/$STARTER"

if [[ ! -d "$STARTER_PATH" ]]; then
  echo "Unknown starter workspace: $STARTER" >&2
  exit 1
fi

if [[ -e "$DESTINATION" && "$FORCE" != "1" ]]; then
  echo "Destination already exists. Use --force to overwrite." >&2
  exit 1
fi

rm -rf "$DESTINATION"
mkdir -p "$(dirname "$DESTINATION")"
cp -R "$STARTER_PATH" "$DESTINATION"

echo "Copied starter workspace '$STARTER' to $DESTINATION"
