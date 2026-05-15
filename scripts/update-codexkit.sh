#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/hoavdc/CodexKit"
API_URL="https://api.github.com/repos/hoavdc/CodexKit/releases/latest"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILLS_DEST="${CODEXKIT_DESTINATION:-"$HOME/.agents/skills"}"
CURRENT_VERSION=""
LATEST_VERSION=""

detect_version() {
  local package_file="$1"
  if [ -f "$package_file" ]; then
    grep '"version"' "$package_file" | head -1 | sed 's/.*"version"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/'
  fi
}

copy_release_content() {
  local source_root="$1"
  local target_root="$2"
  local target_root_abs
  target_root_abs="$(cd "$target_root" && pwd)"

  if [ -z "$target_root_abs" ] || [ "$target_root_abs" = "/" ]; then
    echo "Refusing to update an unsafe CodexKit root: $target_root_abs" >&2
    exit 1
  fi

  for dir in skills templates workspaces playbooks automations mcp; do
    [ -d "$source_root/$dir" ] || continue
    local target="$target_root_abs/$dir"
    case "$target" in
      "$target_root_abs"/*) ;;
      *)
        echo "Refusing to update outside the CodexKit root: $target" >&2
        exit 1
        ;;
    esac
    rm -rf "$target"
    cp -R "$source_root/$dir" "$target"
  done

  for file in README.md LICENSE NOTICE.md package.json CHANGELOG.md skill-finder.md HUONG-DAN-NHANH.md START-HERE-WINDOWS.cmd START-HERE.sh CREATE-WORKSPACE-WINDOWS.cmd CREATE-WORKSPACE.sh; do
    [ -f "$source_root/$file" ] || continue
    cp "$source_root/$file" "$target_root_abs/$file" 2>/dev/null || true
  done

  for release_file in "$source_root"/RELEASE-v*.md; do
    [ -f "$release_file" ] || continue
    cp "$release_file" "$target_root_abs/$(basename "$release_file")" 2>/dev/null || true
  done
}

find_extracted_root() {
  local extract_dir="$1"
  for dir in "$extract_dir"/* "$extract_dir"; do
    [ -d "$dir" ] || continue
    if [ -f "$dir/package.json" ] || [ -f "$dir/skill-finder.md" ] || [ -d "$dir/skills" ]; then
      printf '%s\n' "$dir"
      return 0
    fi
  done
  return 1
}

CURRENT_VERSION="$(detect_version "$ROOT_DIR/package.json" || true)"

echo ""
echo "================================================"
echo "          CodexKit Updater"
echo "================================================"
echo ""
[ -n "$CURRENT_VERSION" ] && echo "Current version: v$CURRENT_VERSION"
echo "Skills destination: $SKILLS_DEST"
echo ""

if [ -d "$ROOT_DIR/.git" ]; then
  echo "[GIT] Git repository detected. Updating via git pull..."
  echo ""

  cd "$ROOT_DIR"

  if ! git diff --quiet 2>/dev/null || ! git diff --cached --quiet 2>/dev/null; then
    echo "Warning: you have uncommitted changes. Stashing them..."
    git stash push -u -m "CodexKit updater auto-stash"
    STASHED=1
  else
    STASHED=0
  fi

  BEFORE="$(git rev-parse HEAD)"
  git pull --rebase origin main 2>&1 || {
    git rebase --abort 2>/dev/null || true
    git pull origin main 2>&1
  }
  AFTER="$(git rev-parse HEAD)"

  if [ "$BEFORE" = "$AFTER" ]; then
    echo ""
    echo "Already up to date."
  else
    echo ""
    echo "Updated successfully."
    echo ""
    echo "Changes:"
    git log --oneline "$BEFORE..$AFTER" 2>/dev/null || true
  fi

  if [ "$STASHED" = "1" ]; then
    echo ""
    echo "Restoring your local changes..."
    git stash pop || echo "Warning: could not auto-restore stash. Run 'git stash pop' manually."
  fi

  LATEST_VERSION="$(detect_version "$ROOT_DIR/package.json" || true)"
  if [ -n "$LATEST_VERSION" ]; then
    echo ""
    echo "Version: v$CURRENT_VERSION -> v$LATEST_VERSION"
  fi

  echo ""
  echo "Re-installing skills..."
  CODEXKIT_FORCE=1 CODEXKIT_DESTINATION="$SKILLS_DEST" bash "$ROOT_DIR/scripts/install-skills.sh" --source "$ROOT_DIR/skills"
else
  echo "[DOWNLOAD] No git repo found. Checking GitHub for latest release..."
  echo ""

  if ! command -v curl >/dev/null 2>&1; then
    echo "curl is required but was not found. Please install curl first."
    exit 1
  fi

  RELEASE_JSON="$(curl -fsSL "$API_URL" || true)"
  LATEST_VERSION="$(printf '%s' "$RELEASE_JSON" | grep '"tag_name"' | head -1 | sed 's/.*"tag_name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/' | sed 's/^v//')"

  if [ -z "$LATEST_VERSION" ]; then
    echo "Could not fetch latest version from GitHub."
    echo "Check your internet connection or visit: $REPO_URL/releases"
    exit 1
  fi

  echo "Latest version: v$LATEST_VERSION"

  if [ "$CURRENT_VERSION" = "$LATEST_VERSION" ]; then
    echo "You are already on the latest version."
    echo ""
    echo "Re-installing skills anyway..."
    CODEXKIT_FORCE=1 CODEXKIT_DESTINATION="$SKILLS_DEST" bash "$ROOT_DIR/scripts/install-skills.sh" --source "$ROOT_DIR/skills"
    exit 0
  fi

  DOWNLOAD_URL="$REPO_URL/releases/download/v$LATEST_VERSION/codexkit-starter-pack-v$LATEST_VERSION.zip"
  TMP_DIR="$(mktemp -d)"
  trap 'rm -rf "$TMP_DIR"' EXIT

  echo ""
  echo "Downloading v$LATEST_VERSION from GitHub..."
  echo "  $DOWNLOAD_URL"
  curl -fL -o "$TMP_DIR/codexkit.zip" "$DOWNLOAD_URL"

  echo "Extracting..."
  mkdir -p "$TMP_DIR/extracted"
  if command -v unzip >/dev/null 2>&1; then
    unzip -qo "$TMP_DIR/codexkit.zip" -d "$TMP_DIR/extracted"
  elif command -v bsdtar >/dev/null 2>&1; then
    bsdtar -xf "$TMP_DIR/codexkit.zip" -C "$TMP_DIR/extracted"
  else
    echo "unzip or bsdtar is required to extract the release package."
    exit 1
  fi

  EXTRACTED_ROOT="$(find_extracted_root "$TMP_DIR/extracted" || true)"
  if [ -z "$EXTRACTED_ROOT" ]; then
    echo "Could not find the release root in the downloaded package."
    exit 1
  fi

  echo "Syncing local CodexKit content..."
  copy_release_content "$EXTRACTED_ROOT" "$ROOT_DIR"

  echo "Installing new skills from v$LATEST_VERSION..."
  CODEXKIT_FORCE=1 CODEXKIT_DESTINATION="$SKILLS_DEST" bash "$ROOT_DIR/scripts/install-skills.sh" --source "$ROOT_DIR/skills"
fi

echo ""
echo "================================================"
echo "          Update complete!"
echo "================================================"
echo ""
echo "Next steps:"
echo "  1. Restart Codex to pick up new/updated skills"
echo "  2. Type /skills to verify the update"
echo "  3. Open skill-finder.md to browse new skills"
echo ""
