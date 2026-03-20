param(
    [string]$Starter,
    [string]$Destination,
    [string]$SourceDir = (Join-Path $PSScriptRoot "..\\workspaces"),
    [switch]$List,
    [switch]$Force
)

$resolvedSource = (Resolve-Path $SourceDir).Path
$availableStarters = Get-ChildItem -Path $resolvedSource -Directory | Select-Object -ExpandProperty Name

if ($List) {
    $availableStarters | ForEach-Object { Write-Host $_ }
    exit 0
}

if (-not $Starter) {
    throw "Starter is required. Use -List to see available starter workspaces."
}

if (-not $Destination) {
    throw "Destination is required. Example: .\\scripts\\quick-start.ps1 -Starter project-management-office -Destination .\\acme-pmo"
}

$starterPath = Join-Path $resolvedSource $Starter

if (-not (Test-Path $starterPath)) {
    throw "Unknown starter workspace: $Starter"
}

if ((Test-Path $Destination) -and -not $Force) {
    throw "Destination already exists. Use -Force to overwrite."
}

if (Test-Path $Destination) {
    Remove-Item -Recurse -Force $Destination
}

$destinationParent = Split-Path -Parent $Destination
if ([string]::IsNullOrWhiteSpace($destinationParent)) {
    $destinationParent = "."
}

New-Item -ItemType Directory -Force -Path $destinationParent | Out-Null
Copy-Item -Recurse -Force $starterPath $Destination

Write-Host "Copied starter workspace '$Starter' to $Destination"
