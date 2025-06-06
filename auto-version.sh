#!/bin/bash

# GROWTHFLOW Website Auto-Versioning Script
# This script automatically increments the version by 0.01 and pushes to GitHub

# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Extract major and minor version parts
# Convert version like "1.01.0" to "1.02.0"
MAJOR=$(echo $CURRENT_VERSION | cut -d. -f1)
MINOR=$(echo $CURRENT_VERSION | cut -d. -f2)
PATCH=$(echo $CURRENT_VERSION | cut -d. -f3)

# Increment minor version by 1 (0.01 increment)
NEW_MINOR=$((MINOR + 1))

# Format new version with leading zero if needed
if [ $NEW_MINOR -lt 10 ]; then
    NEW_VERSION="${MAJOR}.0${NEW_MINOR}.${PATCH}"
else
    NEW_VERSION="${MAJOR}.${NEW_MINOR}.${PATCH}"
fi

echo "New version: $NEW_VERSION"

# Update package.json with new version
sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json

# Update README.md with new version
sed -i "s/Current Version: $CURRENT_VERSION/Current Version: $NEW_VERSION/" README.md

# Add version to history in README
echo "- v$NEW_VERSION - $(date '+%Y-%m-%d') - Automated version update" >> version_history.txt

# Git operations
git add .
git commit -m "Version $NEW_VERSION - Automated update"
git tag "v$NEW_VERSION"
git push origin main
git push origin "v$NEW_VERSION"

echo "Successfully updated to version $NEW_VERSION and pushed to GitHub!"

