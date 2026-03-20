#!/usr/bin/env bash
# ──────────────────────────────────────────
# CodexKit Update Script (macOS / Linux)
# Updates skills from local repo or downloads latest release from GitHub
# ──────────────────────────────────────────
set -euo pipefail

REPO_URL="https://github.com/hoavdc/CodexKit"
API_URL="https://api.github.com/repos/hoavdc/CodexKit/releases/latest"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILLS_DEST="${CODEXKIT_DESTINATION:-"$HOME/.agents/skills"}"
CURRENT_VERSION=""
LATEST_VERSION=""

# ── Detect current version ──
if [ -f "$ROOT_DIR/package.json" ]; then
  CURRENT_VERSION=$(grep '"version"' "$ROOT_DIR/package.json" | head -1 | sed 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/')
fi

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║          CodexKit Updater                    ║"
echo "╚══════════════════════════════════════════════╝"
echo ""
[ -n "$CURRENT_VERSION" ] && echo "Current version: v$CURRENT_VERSION"
echo "Skills destination: $SKILLS_DEST"
echo ""

# ── Detect update method ──
if [ -d "$ROOT_DIR/.git" ]; then
  echo "📦 Git repository detected. Updating via git pull..."
  echo ""

  cd "$ROOT_DIR"

  # Check for uncommitted changes
  if ! git diff --quiet 2>/dev/null || ! git diff --cached --quiet 2>/dev/null; then
    echo "⚠️  You have uncommitted changes. Stashing them..."
    git stash
    STASHED=1
  else
    STASHED=0
  fi

  # Pull latest
  BEFORE=$(git rev-parse HEAD)
  git pull --rebase origin main 2>&1 || git pull origin main 2>&1
  AFTER=$(git rev-parse HEAD)

  if [ "$BEFORE" = "$AFTER" ]; then
    echo ""
    echo "✅ Already up to date!"
  else
    echo ""
    echo "✅ Updated successfully!"
    # Show what changed
    echo ""
    echo "Changes:"
    git log --oneline "$BEFORE..$AFTER" 2>/dev/null || true
  fi

  # Restore stashed changes
  if [ "$STASHED" = "1" ]; then
    echo ""
    echo "Restoring your local changes..."
    git stash pop || echo "⚠️  Could not auto-restore stash. Run 'git stash pop' manually."
  fi

  # Re-read version
  if [ -f "$ROOT_DIR/package.json" ]; then
    LATEST_VERSION=$(grep '"version"' "$ROOT_DIR/package.json" | head -1 | sed 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/')
    echo ""
    echo "Version: v$CURRENT_VERSION → v$LATEST_VERSION"
  fi

  # Re-install skills
  echo ""
  echo "📥 Re-installing skills..."
  CODEXKIT_FORCE=1 bash "$ROOT_DIR/scripts/install-skills.sh"

else
  # ── Non-git: Download latest release ──
  echo "📦 No git repo found. Checking GitHub for latest release..."
  echo ""

  # Check for curl
  if ! command -v curl &>/dev/null; then
    echo "❌ curl is required but not found. Please install curl first."
    exit 1
  fi

  # Fetch latest release info
  RELEASE_JSON=$(curl -sL "$API_URL")
  LATEST_VERSION=$(echo "$RELEASE_JSON" | grep '"tag_name"' | head -1 | sed 's/.*"tag_name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/' | sed 's/^v//')

  if [ -z "$LATEST_VERSION" ]; then
    echo "❌ Could not fetch latest version from GitHub."
    echo "   Check your internet connection or visit: $REPO_URL/releases"
    exit 1
  fi

  echo "Latest version: v$LATEST_VERSION"

  if [ "$CURRENT_VERSION" = "$LATEST_VERSION" ]; then
    echo "✅ You are already on the latest version!"
    echo ""
    echo "Re-installing skills anyway..."
    CODEXKIT_FORCE=1 bash "$ROOT_DIR/scripts/install-skills.sh"
    exit 0
  fi

  # Download latest starter pack
  DOWNLOAD_URL="$REPO_URL/releases/download/v$LATEST_VERSION/codexkit-starter-pack-v$LATEST_VERSION.zip"
  TMP_DIR=$(mktemp -d)
  echo ""
  echo "📥 Downloading v$LATEST_VERSION from GitHub..."
  echo "   $DOWNLOAD_URL"

  if curl -sL -o "$TMP_DIR/codexkit.zip" "$DOWNLOAD_URL"; then
    echo "📂 Extracting..."

    # Try unzip
    if command -v unzip &>/dev/null; then
      unzip -qo "$TMP_DIR/codexkit.zip" -d "$TMP_DIR/extracted"
    elif command -v tar &>/dev/null; then
      mkdir -p "$TMP_DIR/extracted"
      cd "$TMP_DIR/extracted" && tar -xf "$TMP_DIR/codexkit.zip"
    else
      echo "❌ No unzip or tar found. Please install unzip."
      rm -rf "$TMP_DIR"
      exit 1
    fi

    # Find the extracted skills directory
    EXTRACTED_SKILLS=""
    for dir in "$TMP_DIR/extracted"/*/skills "$TMP_DIR/extracted"/skills; do
      if [ -d "$dir" ]; then
        EXTRACTED_SKILLS="$dir"
        break
      fi
    done

    if [ -z "$EXTRACTED_SKILLS" ]; then
      echo "❌ Could not find skills directory in the downloaded package."
      rm -rf "$TMP_DIR"
      exit 1
    fi

    # Copy new skills
    echo "📥 Installing new skills from v$LATEST_VERSION..."
    mkdir -p "$SKILLS_DEST"
    INSTALLED_COUNT=0
    for skill_dir in "$EXTRACTED_SKILLS"/*/; do
      [ -d "$skill_dir" ] || continue
      skill_name="$(basename "$skill_dir")"
      target="$SKILLS_DEST/$skill_name"
      rm -rf "$target"
      cp -R "$skill_dir" "$target"
      INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
    done

    echo "✅ Updated $INSTALLED_COUNT skills to v$LATEST_VERSION"

    # Update local files too
    EXTRACTED_ROOT=""
    for dir in "$TMP_DIR/extracted"/*/; do
      if [ -f "${dir}package.json" ] || [ -f "${dir}skill-finder.md" ]; then
        EXTRACTED_ROOT="$dir"
        break
      fi
    done

    if [ -n "$EXTRACTED_ROOT" ]; then
      # Update key reference files
      for file in skill-finder.md HUONG-DAN-NHANH.md CHANGELOG.md; do
        if [ -f "$EXTRACTED_ROOT/$file" ]; then
          cp "$EXTRACTED_ROOT/$file" "$ROOT_DIR/$file" 2>/dev/null || true
        fi
      done
    fi

    # Cleanup
    rm -rf "$TMP_DIR"
  else
    echo "❌ Download failed. Please download manually from:"
    echo "   $REPO_URL/releases"
    rm -rf "$TMP_DIR"
    exit 1
  fi
fi

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║          Update complete!                    ║"
echo "╚══════════════════════════════════════════════╝"
echo ""
echo "Next steps:"
echo "  1. Restart Codex to pick up new/updated skills"
echo "  2. Type /skills to verify the update"
echo "  3. Open skill-finder.md to browse new skills"
echo ""
