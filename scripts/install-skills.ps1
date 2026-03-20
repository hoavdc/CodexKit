param(
    [string]$SourceDir = (Join-Path $PSScriptRoot "..\\skills"),
    [string]$Destination = (Join-Path $HOME ".codex\\skills"),
    [switch]$Force
)

$resolvedSource = (Resolve-Path $SourceDir).Path
New-Item -ItemType Directory -Force -Path $Destination | Out-Null

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
    Write-Host "Installed $($_.Name)"
}

Write-Host "CodexKit skill installation complete."
