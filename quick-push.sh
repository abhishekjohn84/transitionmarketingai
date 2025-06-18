#!/bin/bash
# TransitionMarketingAI Website Quick Push Script

# Check if commit message provided
if [ -z "$1" ]; then
    echo "Usage: ./quick-push.sh 'commit message'"
    exit 1
fi

# Add all changes
git add .

# Commit with provided message
git commit -m "$1"

# Push to main branch (triggers automatic deployment)
git push origin main

echo "Changes pushed to GitHub! Deployment will start automatically."
echo "Check deployment status at: https://github.com/abhishekjohn84/transitionmarketingai/actions"
echo "Site will be updated at: http://demo.transitionmarketingai.com"

