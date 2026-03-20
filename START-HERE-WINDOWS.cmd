@echo off
setlocal
cd /d "%~dp0"
title CodexKit Quick Install

echo ==========================================
echo CodexKit quick install for Windows
echo ==========================================
echo.
echo This will install CodexKit skills into:
echo   %USERPROFILE%\.agents\skills
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\install-skills.ps1"
if errorlevel 1 (
  echo.
  echo Installation failed.
  pause
  exit /b 1
)

echo.
echo CodexKit install complete.
echo 1. Restart Codex if the skills do not appear immediately.
echo 2. Type /skills in Codex to confirm installation.
echo 3. Optional: double-click CREATE-WORKSPACE-WINDOWS.cmd to scaffold a starter workspace.
echo.
pause
