#!/usr/bin/env bash
set -euo pipefail

# Push the current HEAD to the remote main branch.
# Usage: ./scripts/push-main.sh

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This script must be run inside a git repository" >&2
  exit 1
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"

if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree is dirty. Please commit or stash your changes before pushing." >&2
  exit 1
fi

remote="${1:-origin}"

echo "Pushing branch '$current_branch' to $remote/main..."

git push "$remote" "HEAD:main"
