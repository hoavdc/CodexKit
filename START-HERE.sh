#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo ""
echo "================================================"
echo "   CodexKit v0.6.0 — Work Operating Kit"
echo "================================================"
echo ""
echo "   Turn Codex and ChatGPT into disciplined"
echo "   specialists for your daily work."
echo ""
echo "   66 skills  |  9 playbooks  |  10 templates"
echo "   10 automations  |  6 starter workspaces"
echo ""
echo "================================================"
echo ""

# ---- Check if Codex CLI is installed ----
if ! command -v codex &>/dev/null; then
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
echo "    2. Type /skills in Codex to confirm all 66 skills"
echo "    3. Open skill-finder.md to browse skills by situation"
echo "    4. Optional: bash ./CREATE-WORKSPACE.sh"
echo "       to scaffold a department workspace"
echo ""
echo "  Quick start (Vietnamese): HUONG-DAN-NHANH.md"
echo "  Full docs: README.md"
echo ""
