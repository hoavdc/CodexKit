param(
    [string]$SourceDir = (Join-Path $PSScriptRoot "..\\skills"),
    [string]$Destination = (Join-Path $HOME ".agents\\skills"),
    [switch]$Force
)

$resolvedSource = (Resolve-Path $SourceDir).Path
New-Item -ItemType Directory -Force -Path $Destination | Out-Null
$installedCount = 0

Write-Host "Installing CodexKit skills from $resolvedSource"
Write-Host "Destination: $Destination"

Get-ChildItem -Path $resolvedSource -Directory | ForEach-Object {
    $target = Join-Path $Destination $_.Name

    if ((Test-Path $target) -and -not $Force) {
        Write-Warning "Skipping $($_.Name) because it already exists. Use -Force to overwrite."
        return
    }

    if (Test-Path $target) {
        Remove-Item -Recurse -Force $target
    }

    Copy-Item -Recurse -Force $_.FullName $target
    $installedCount += 1
    Write-Host "Installed $($_.Name)"
}

Write-Host "CodexKit skill installation complete. Installed $installedCount skills."
Write-Host "Next steps:"
Write-Host "1. Restart Codex if the skills do not appear immediately."
Write-Host "2. Type /skills in Codex to confirm installation."
Write-Host "3. Optional: run .\\scripts\\quick-start.ps1 -List to scaffold a starter workspace."
