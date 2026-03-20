#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Available starters:"
bash "$ROOT_DIR/scripts/quick-start.sh" --list
echo
read -r -p "Enter starter name: " STARTER
read -r -p "Enter destination folder (example: ./my-pmo): " DESTINATION

if [[ -z "${STARTER}" || -z "${DESTINATION}" ]]; then
  echo "Starter name and destination are required." >&2
  exit 1
fi

bash "$ROOT_DIR/scripts/quick-start.sh" --starter "$STARTER" --destination "$DESTINATION"
echo "Workspace created at $DESTINATION"
