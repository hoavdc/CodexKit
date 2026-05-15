param(
    [string]$SourceDir = (Join-Path $PSScriptRoot "..\skills"),
    [string]$Destination = (Join-Path $HOME ".agents\skills"),
    [switch]$Force
)

$ErrorActionPreference = "Stop"

$resolvedSource = (Resolve-Path $SourceDir).Path
New-Item -ItemType Directory -Force -Path $Destination | Out-Null

$resolvedDestination = [System.IO.Path]::GetFullPath($Destination)
if (
    [string]::IsNullOrWhiteSpace($resolvedDestination) -or
    $resolvedDestination -match '^[A-Za-z]:\\$' -or
    $resolvedDestination -eq [System.IO.Path]::GetPathRoot($resolvedDestination)
) {
    throw "Refusing to install into an unsafe destination: $resolvedDestination"
}

$installedCount = 0

Write-Host "Installing CodexKit skills from $resolvedSource"
Write-Host "Destination: $resolvedDestination"

Get-ChildItem -Path $resolvedSource -Directory | ForEach-Object {
    $target = Join-Path $resolvedDestination $_.Name
    $resolvedTarget = [System.IO.Path]::GetFullPath($target)
    $expectedPrefix = $resolvedDestination.TrimEnd('\') + '\'

    if (-not $resolvedTarget.StartsWith($expectedPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "Refusing to write outside the destination directory: $resolvedTarget"
    }

    if ((Test-Path $resolvedTarget) -and -not $Force) {
        Write-Warning "Skipping $($_.Name) because it already exists. Use -Force to overwrite."
        return
    }

    if (Test-Path $resolvedTarget) {
        Remove-Item -Recurse -Force -LiteralPath $resolvedTarget
    }

    Copy-Item -Recurse -Force -LiteralPath $_.FullName -Destination $resolvedTarget
    $installedCount += 1
    Write-Host "Installed $($_.Name)"
}

Write-Host "CodexKit skill installation complete. Installed $installedCount skills."
Write-Host "Next steps:"
Write-Host "1. Restart Codex if the skills do not appear immediately."
Write-Host "2. Type /skills in Codex to confirm installation."
Write-Host "3. Optional: run .\scripts\quick-start.ps1 -List to scaffold a starter workspace."
