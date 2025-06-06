#!/bin/bash

# GROWTHFLOW Website Quick Push Script
# Usage: ./quick-push.sh "Your commit message"

if [ -z "$1" ]; then
    echo "Usage: ./quick-push.sh \"Your commit message\""
    exit 1
fi

COMMIT_MESSAGE="$1"

# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Extract version parts (format: X.YY.Z)
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

# Add to version history
echo "- v$NEW_VERSION - $(date '+%Y-%m-%d %H:%M') - $COMMIT_MESSAGE" >> version_history.txt

# Git operations
echo "Adding files to Git..."
git add .

echo "Creating commit..."
git commit -m "v$NEW_VERSION - $COMMIT_MESSAGE"

echo "Creating version tag..."
git tag "v$NEW_VERSION"

echo "Pushing to GitHub..."
git push origin main
git push origin "v$NEW_VERSION"

echo ""
echo "🎉 Successfully updated to version $NEW_VERSION and pushed to GitHub!"
echo "📝 Commit: $COMMIT_MESSAGE"
echo "🏷️  Tag: v$NEW_VERSION"
echo ""

