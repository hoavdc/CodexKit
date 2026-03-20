@echo off
:: ──────────────────────────────────────────
:: CodexKit Updater (Windows double-click)
:: ──────────────────────────────────────────

echo.
echo ================================================
echo           CodexKit Updater
echo ================================================
echo.

:: Check PowerShell
where pwsh >nul 2>&1
if %errorlevel%==0 (
    pwsh -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\update-codexkit.ps1"
) else (
    powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\update-codexkit.ps1"
)

echo.
pause
