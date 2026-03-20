#!/usr/bin/env bash
# ──────────────────────────────────────────
# CodexKit Updater (macOS / Linux)
# ──────────────────────────────────────────
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo ""
echo "================================================"
echo "          CodexKit Updater"
echo "================================================"
echo ""

bash "$ROOT_DIR/scripts/update-codexkit.sh"
