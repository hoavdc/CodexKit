param(
    [string]$Destination = (Join-Path $HOME ".agents\skills")
)

$ErrorActionPreference = "Stop"
$RepoUrl = "https://github.com/hoavdc/CodexKit"
$ApiUrl = "https://api.github.com/repos/hoavdc/CodexKit/releases/latest"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir = Split-Path -Parent $ScriptDir
$CurrentVersion = ""

# ── Detect current version ──
$pkgPath = Join-Path $RootDir "package.json"
if (Test-Path $pkgPath) {
    $pkg = Get-Content $pkgPath -Raw | ConvertFrom-Json
    $CurrentVersion = $pkg.version
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "          CodexKit Updater                      " -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
if ($CurrentVersion) { Write-Host "Current version: v$CurrentVersion" }
Write-Host "Skills destination: $Destination"
Write-Host ""

# ── Detect update method ──
$gitDir = Join-Path $RootDir ".git"
if (Test-Path $gitDir) {
    Write-Host "[GIT] Git repository detected. Updating via git pull..." -ForegroundColor Green
    Write-Host ""

    Push-Location $RootDir

    # Check for uncommitted changes
    $status = git status --porcelain 2>$null
    $stashed = $false
    if ($status) {
        Write-Host "Warning: You have uncommitted changes. Stashing them..." -ForegroundColor Yellow
        git stash
        $stashed = $true
    }

    # Pull latest
    $before = git rev-parse HEAD
    try {
        git pull --rebase origin main 2>&1
    } catch {
        git pull origin main 2>&1
    }
    $after = git rev-parse HEAD

    if ($before -eq $after) {
        Write-Host ""
        Write-Host "Already up to date!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "Updated successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Changes:"
        git log --oneline "$before..$after" 2>$null
    }

    # Restore stashed changes
    if ($stashed) {
        Write-Host ""
        Write-Host "Restoring your local changes..."
        try { git stash pop } catch { Write-Warning "Could not auto-restore stash. Run 'git stash pop' manually." }
    }

    # Re-read version
    if (Test-Path $pkgPath) {
        $pkg = Get-Content $pkgPath -Raw | ConvertFrom-Json
        $LatestVersion = $pkg.version
        Write-Host ""
        Write-Host "Version: v$CurrentVersion -> v$LatestVersion" -ForegroundColor Green
    }

    Pop-Location

    # Re-install skills
    Write-Host ""
    Write-Host "Re-installing skills..." -ForegroundColor Cyan
    & "$RootDir\scripts\install-skills.ps1" -Destination $Destination -Force

} else {
    # ── Non-git: Download latest release ──
    Write-Host "[DOWNLOAD] No git repo found. Checking GitHub for latest release..." -ForegroundColor Yellow
    Write-Host ""

    try {
        $headers = @{ "User-Agent" = "CodexKit-Updater" }
        $release = Invoke-RestMethod -Uri $ApiUrl -Headers $headers -TimeoutSec 15
        $LatestVersion = $release.tag_name -replace '^v', ''
    } catch {
        Write-Host "Could not fetch latest version from GitHub." -ForegroundColor Red
        Write-Host "Check your internet connection or visit: $RepoUrl/releases"
        exit 1
    }

    Write-Host "Latest version: v$LatestVersion"

    if ($CurrentVersion -eq $LatestVersion) {
        Write-Host "You are already on the latest version!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Re-installing skills anyway..."
        & "$RootDir\scripts\install-skills.ps1" -Destination $Destination -Force
        exit 0
    }

    # Download latest starter pack
    $downloadUrl = "$RepoUrl/releases/download/v$LatestVersion/codexkit-starter-pack-v$LatestVersion.zip"
    $tmpDir = Join-Path $env:TEMP "codexkit-update-$(Get-Random)"
    $zipFile = Join-Path $tmpDir "codexkit.zip"
    $extractDir = Join-Path $tmpDir "extracted"

    New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null

    Write-Host ""
    Write-Host "Downloading v$LatestVersion from GitHub..." -ForegroundColor Cyan
    Write-Host "  $downloadUrl"

    try {
        Invoke-WebRequest -Uri $downloadUrl -OutFile $zipFile -TimeoutSec 120
    } catch {
        Write-Host "Download failed. Please download manually from:" -ForegroundColor Red
        Write-Host "  $RepoUrl/releases"
        Remove-Item -Recurse -Force $tmpDir -ErrorAction SilentlyContinue
        exit 1
    }

    Write-Host "Extracting..." -ForegroundColor Cyan
    Expand-Archive -Path $zipFile -DestinationPath $extractDir -Force

    # Find the extracted skills directory
    $extractedSkills = Get-ChildItem -Path $extractDir -Recurse -Directory -Filter "skills" | Select-Object -First 1
    if (-not $extractedSkills) {
        Write-Host "Could not find skills directory in the downloaded package." -ForegroundColor Red
        Remove-Item -Recurse -Force $tmpDir -ErrorAction SilentlyContinue
        exit 1
    }

    # Copy new skills
    Write-Host "Installing new skills from v$LatestVersion..." -ForegroundColor Cyan
    New-Item -ItemType Directory -Force -Path $Destination | Out-Null
    $installedCount = 0

    Get-ChildItem -Path $extractedSkills.FullName -Directory | ForEach-Object {
        $target = Join-Path $Destination $_.Name
        if (Test-Path $target) { Remove-Item -Recurse -Force $target }
        Copy-Item -Recurse -Force $_.FullName $target
        $installedCount++
    }

    Write-Host "Updated $installedCount skills to v$LatestVersion" -ForegroundColor Green

    # Update local reference files
    $extractedRoot = Get-ChildItem -Path $extractDir -Directory | Select-Object -First 1
    if ($extractedRoot) {
        foreach ($file in @("skill-finder.md", "HUONG-DAN-NHANH.md", "CHANGELOG.md")) {
            $src = Join-Path $extractedRoot.FullName $file
            if (Test-Path $src) {
                Copy-Item -Force $src (Join-Path $RootDir $file) -ErrorAction SilentlyContinue
            }
        }
    }

    # Cleanup
    Remove-Item -Recurse -Force $tmpDir -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Green
Write-Host "          Update complete!                      " -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Restart Codex to pick up new/updated skills"
Write-Host "  2. Type /skills to verify the update"
Write-Host "  3. Open skill-finder.md to browse new skills"
Write-Host ""
