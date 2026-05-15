param(
    [string]$Destination = (Join-Path $HOME ".agents\skills")
)

$ErrorActionPreference = "Stop"
$RepoUrl = "https://github.com/hoavdc/CodexKit"
$ApiUrl = "https://api.github.com/repos/hoavdc/CodexKit/releases/latest"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir = Split-Path -Parent $ScriptDir
$CurrentVersion = ""

function Copy-CodexKitReleaseContent {
    param(
        [Parameter(Mandatory = $true)][string]$SourceRoot,
        [Parameter(Mandatory = $true)][string]$TargetRoot
    )

    $targetRootFull = [System.IO.Path]::GetFullPath($TargetRoot)
    if (
        [string]::IsNullOrWhiteSpace($targetRootFull) -or
        $targetRootFull -match '^[A-Za-z]:\\$' -or
        $targetRootFull -eq [System.IO.Path]::GetPathRoot($targetRootFull)
    ) {
        throw "Refusing to update an unsafe CodexKit root: $targetRootFull"
    }

    foreach ($dir in @("skills", "templates", "workspaces", "playbooks", "automations", "mcp")) {
        $src = Join-Path $SourceRoot $dir
        if (-not (Test-Path $src)) { continue }

        $dst = Join-Path $targetRootFull $dir
        $dstFull = [System.IO.Path]::GetFullPath($dst)
        $expectedPrefix = $targetRootFull.TrimEnd('\') + '\'
        if (-not $dstFull.StartsWith($expectedPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
            throw "Refusing to update outside the CodexKit root: $dstFull"
        }

        if (Test-Path $dstFull) {
            Remove-Item -Recurse -Force -LiteralPath $dstFull
        }
        Copy-Item -Recurse -Force -LiteralPath $src -Destination $dstFull
    }

    foreach ($file in @("README.md", "LICENSE", "NOTICE.md", "package.json", "CHANGELOG.md", "skill-finder.md", "HUONG-DAN-NHANH.md", "START-HERE-WINDOWS.cmd", "START-HERE.sh", "CREATE-WORKSPACE-WINDOWS.cmd", "CREATE-WORKSPACE.sh")) {
        $src = Join-Path $SourceRoot $file
        if (Test-Path $src) {
            Copy-Item -Force -LiteralPath $src -Destination (Join-Path $targetRootFull $file) -ErrorAction SilentlyContinue
        }
    }

    Get-ChildItem -Path $SourceRoot -Filter "RELEASE-v*.md" -File -ErrorAction SilentlyContinue | ForEach-Object {
        Copy-Item -Force -LiteralPath $_.FullName -Destination (Join-Path $targetRootFull $_.Name) -ErrorAction SilentlyContinue
    }
}

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

$gitDir = Join-Path $RootDir ".git"
if (Test-Path $gitDir) {
    Write-Host "[GIT] Git repository detected. Updating via git pull..." -ForegroundColor Green
    Write-Host ""

    Push-Location $RootDir

    $stashed = $false
    $status = git status --porcelain 2>$null
    if ($status) {
        Write-Host "Warning: You have uncommitted changes. Stashing them..." -ForegroundColor Yellow
        git stash push -u -m "CodexKit updater auto-stash"
        $stashed = $true
    }

    $before = (git rev-parse HEAD).Trim()
    git pull --rebase origin main 2>&1
    if ($LASTEXITCODE -ne 0) {
        git rebase --abort 2>$null
        git pull origin main 2>&1
        if ($LASTEXITCODE -ne 0) {
            Pop-Location
            throw "Git update failed. Resolve the git error above, then rerun the updater."
        }
    }
    $after = (git rev-parse HEAD).Trim()

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

    if ($stashed) {
        Write-Host ""
        Write-Host "Restoring your local changes..."
        git stash pop
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Could not auto-restore stash. Run 'git stash pop' manually."
        }
    }

    if (Test-Path $pkgPath) {
        $pkg = Get-Content $pkgPath -Raw | ConvertFrom-Json
        $LatestVersion = $pkg.version
        Write-Host ""
        Write-Host "Version: v$CurrentVersion -> v$LatestVersion" -ForegroundColor Green
    }

    Pop-Location

    Write-Host ""
    Write-Host "Re-installing skills..." -ForegroundColor Cyan
    & "$RootDir\scripts\install-skills.ps1" -Destination $Destination -Force
} else {
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
        Remove-Item -Recurse -Force -LiteralPath $tmpDir -ErrorAction SilentlyContinue
        exit 1
    }

    Write-Host "Extracting..." -ForegroundColor Cyan
    Expand-Archive -Path $zipFile -DestinationPath $extractDir -Force

    $extractedRoot = Get-ChildItem -Path $extractDir -Directory | Where-Object {
        (Test-Path (Join-Path $_.FullName "package.json")) -or
        (Test-Path (Join-Path $_.FullName "skill-finder.md")) -or
        (Test-Path (Join-Path $_.FullName "skills"))
    } | Select-Object -First 1

    if (-not $extractedRoot) {
        Write-Host "Could not find the release root in the downloaded package." -ForegroundColor Red
        Remove-Item -Recurse -Force -LiteralPath $tmpDir -ErrorAction SilentlyContinue
        exit 1
    }

    Write-Host "Syncing local CodexKit content..." -ForegroundColor Cyan
    Copy-CodexKitReleaseContent -SourceRoot $extractedRoot.FullName -TargetRoot $RootDir

    $localSkills = Join-Path $RootDir "skills"
    if (-not (Test-Path $localSkills)) {
        Write-Host "Could not find the local skills directory after sync." -ForegroundColor Red
        Remove-Item -Recurse -Force -LiteralPath $tmpDir -ErrorAction SilentlyContinue
        exit 1
    }

    Write-Host "Installing new skills from v$LatestVersion..." -ForegroundColor Cyan
    & "$RootDir\scripts\install-skills.ps1" -SourceDir $localSkills -Destination $Destination -Force

    Remove-Item -Recurse -Force -LiteralPath $tmpDir -ErrorAction SilentlyContinue
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
