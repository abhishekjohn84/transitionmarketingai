# GROWTHFLOW Website Version Control Guide

## Current Setup
- **Repository**: GROWTHFLOW Website
- **Current Version**: 1.01.0
- **Versioning**: Auto-increment by 0.01 each push

## Quick Commands

### 1. Quick Push with Auto-Versioning
```bash
./quick-push.sh "Your commit message here"
```
**Example:**
```bash
./quick-push.sh "Added new contact form validation"
```

This will:
- Increment version from 1.01.0 → 1.02.0
- Update package.json and README.md
- Create commit with your message
- Create version tag (v1.02.0)
- Push everything to GitHub

### 2. Manual Version Control
```bash
# Check current version
node -p "require('./package.json').version"

# Add files
git add .

# Commit
git commit -m "Your message"

# Push
git push origin main
```

### 3. View Version History
```bash
cat version_history.txt
```

## Version Format
- **Format**: X.YY.Z (e.g., 1.01.0, 1.02.0, 1.15.0)
- **Increment**: +0.01 each push (minor version)
- **Tags**: Each version gets a Git tag (v1.01.0, v1.02.0, etc.)

## Files Updated Automatically
- `package.json` - Version field
- `README.md` - Current Version line
- `version_history.txt` - Version log with timestamps

## GitHub Integration
- **Main Branch**: All pushes go to `main`
- **Tags**: Each version creates a GitHub release tag
- **History**: Full commit history with version increments

## Usage Examples

### Adding a new feature:
```bash
./quick-push.sh "Added FAQ page with 8 comprehensive questions"
```

### Fixing a bug:
```bash
./quick-push.sh "Fixed mobile responsive issues in hero section"
```

### Updating content:
```bash
./quick-push.sh "Updated pricing plans and service descriptions"
```

## Notes
- Always use descriptive commit messages
- Version increments automatically - no manual version editing needed
- Each push creates a permanent version tag for easy rollbacks
- Version history is maintained in `version_history.txt`

