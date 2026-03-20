@echo off
setlocal
cd /d "%~dp0"
title CodexKit Starter Workspace

echo ==========================================
echo CodexKit starter workspace scaffold
echo ==========================================
echo.
echo Available starters:
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\quick-start.ps1" -List
echo.
set /p STARTER=Enter starter name: 
set /p DESTINATION=Enter destination folder (example: .\my-pmo): 

if "%STARTER%"=="" (
  echo Starter name is required.
  pause
  exit /b 1
)

if "%DESTINATION%"=="" (
  echo Destination is required.
  pause
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\quick-start.ps1" -Starter "%STARTER%" -Destination "%DESTINATION%"
if errorlevel 1 (
  echo.
  echo Workspace creation failed.
  pause
  exit /b 1
)

echo.
echo Workspace created at %DESTINATION%.
pause
