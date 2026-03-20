@echo off
setlocal
cd /d "%~dp0"
title CodexKit v0.5.0

echo.
echo ================================================
echo    CodexKit v0.5.0 - Work Operating Kit
echo ================================================
echo.
echo    Turn Codex and ChatGPT into disciplined
echo    specialists for your daily work.
echo.
echo    51 skills  ^|  9 playbooks  ^|  10 templates
echo    10 automations  ^|  6 starter workspaces
echo.
echo ================================================
echo.

REM ---- Check if Codex CLI is installed ----
where codex >nul 2>&1
if errorlevel 1 (
    echo  [!] Codex CLI was not detected on this system.
    echo.
    echo  CodexKit requires OpenAI Codex to work.
    echo  Install it first, then re-run this installer.
    echo.
    echo  Step 1: Install Node.js 20+ from https://nodejs.org
    echo  Step 2: Run this command in PowerShell or Terminal:
    echo.
    echo      npm install -g @openai/codex
    echo.
    echo  Step 3: Verify with:   codex --version
    echo  Step 4: Re-run this START-HERE file.
    echo.
    echo  Docs: https://github.com/openai/codex
    echo.
    pause
    exit /b 1
)

echo  [OK] Codex detected. Proceeding with skill installation...
echo.

REM ---- Show where skills will go ----
echo  This will install 36 CodexKit skills into:
echo    %USERPROFILE%\.agents\skills
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\install-skills.ps1"
if errorlevel 1 (
    echo.
    echo  [FAIL] Installation failed. Check the error above.
    pause
    exit /b 1
)

echo.
echo ================================================
echo    Installation complete!
echo ================================================
echo.
echo  Next steps:
echo.
echo    1. Restart Codex (or close and reopen the terminal)
echo    2. Type /skills in Codex to confirm all 51 skills
echo    3. Open skill-finder.md to browse skills by situation
echo    4. Optional: double-click CREATE-WORKSPACE-WINDOWS.cmd
echo       to scaffold a department workspace
echo.
echo  Quick start (Vietnamese): HUONG-DAN-NHANH.md
echo  Full docs: README.md
echo.
pause
