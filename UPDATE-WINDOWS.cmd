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

:: ──────────────────────────────────────────
:: CodexKit Updater (Windows double-click)
:: ──────────────────────────────────────────

echo.
echo ================================================
echo       CodexKit Updater (v%CODEXKIT_VERSION%)
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
