#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=========================================="
echo "CodexKit quick install"
echo "=========================================="
echo

bash "$ROOT_DIR/scripts/install-skills.sh"

echo
echo "CodexKit install complete."
echo "1. Restart Codex if the skills do not appear immediately."
echo "2. Type /skills in Codex to confirm installation."
echo "3. Optional: run bash ./CREATE-WORKSPACE.sh to scaffold a starter workspace."
