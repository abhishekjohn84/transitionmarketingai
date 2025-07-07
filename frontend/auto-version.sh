#!/bin/bash
# TransitionMarketingAI Website Auto-Versioning Script

# Get current version from package.json
current_version=$(node -p "require('./package.json').version")
echo "Current version: $current_version"

# Increment patch version
IFS='.' read -ra VERSION_PARTS <<< "$current_version"
major=${VERSION_PARTS[0]}
minor=${VERSION_PARTS[1]}
patch=${VERSION_PARTS[2]}

new_patch=$((patch + 1))
new_version="$major.$minor.$new_patch"

echo "New version: $new_version"

# Update package.json
npm version $new_version --no-git-tag-version

# Commit and push
git add package.json
git commit -m "Auto-increment version to $new_version"
git push origin main

echo "Version updated and pushed to GitHub!"

