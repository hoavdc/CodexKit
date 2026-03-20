@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

REM ---- Read version from package.json ----
set "CODEXKIT_VERSION=unknown"
if exist "%~dp0package.json" (
    for /f "usebackq delims=" %%v in (`powershell -NoProfile -Command "(Get-Content '%~dp0package.json' | ConvertFrom-Json).version"`) do (
        set "CODEXKIT_VERSION=%%v"
    )
)

title CodexKit v%CODEXKIT_VERSION%

echo.
echo ================================================
echo    CodexKit v%CODEXKIT_VERSION% - Work Operating Kit
echo ================================================
echo.
echo    Turn Codex and ChatGPT into disciplined
echo    specialists for your daily work.
echo.
echo    81 skills  ^|  9 playbooks  ^|  10 templates
echo    10 automations  ^|  6 starter workspaces
echo.
echo ================================================
echo.

REM ---- Check if Codex CLI is installed ----
set "CODEX_FOUND=0"

REM Method 1: where codex (works if codex is in system PATH)
where codex >nul 2>&1
if not errorlevel 1 set "CODEX_FOUND=1"

REM Method 2: Check common npm global install paths
if "%CODEX_FOUND%"=="0" (
    if exist "%APPDATA%\npm\codex.cmd" set "CODEX_FOUND=1"
)
if "%CODEX_FOUND%"=="0" (
    if exist "%LOCALAPPDATA%\npm\codex.cmd" set "CODEX_FOUND=1"
)

REM Method 3: Try npx resolution
if "%CODEX_FOUND%"=="0" (
    npx --no-install codex --version >nul 2>&1
    if not errorlevel 1 set "CODEX_FOUND=1"
)

REM Method 4: Check if node_modules/.bin has it (fnm/nvm setups)
if "%CODEX_FOUND%"=="0" (
    for /f "delims=" %%p in ('npm root -g 2^>nul') do (
        if exist "%%p\..\codex.cmd" set "CODEX_FOUND=1"
    )
)

if "%CODEX_FOUND%"=="0" (
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
echo  This will install CodexKit skills into:
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
echo    2. Type /skills in Codex to confirm all 81 skills
echo    3. Open skill-finder.md to browse skills by situation
echo    4. Optional: double-click CREATE-WORKSPACE-WINDOWS.cmd
echo       to scaffold a department workspace
echo.
echo  Quick start (Vietnamese): HUONG-DAN-NHANH.md
echo  Full docs: README.md
echo.
pause
