#!/bin/bash

# Push spanishAI to GitHub
# Usage: ./push_to_github.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "Usage: ./push_to_github.sh YOUR_GITHUB_USERNAME"
    echo "Example: ./push_to_github.sh alesia"
    exit 1
fi

GITHUB_USER=$1
# Get your token from: https://github.com/settings/tokens
# Select "repo" scope when generating
read -sp "Enter your GitHub Personal Access Token: " TOKEN
echo ""

echo "🚀 Pushing spanishAI to GitHub..."
echo ""

# Remove existing remote if any
git remote remove origin 2>/dev/null

# Add remote with token authentication
git remote add origin https://${TOKEN}@github.com/${GITHUB_USER}/spanishAI.git

# Push to GitHub
echo "Pushing files..."
git push -u origin main

echo ""
echo "✅ Done! Your site should be live in 1-2 minutes at:"
echo "   https://${GITHUB_USER}.github.io/spanishAI/"
echo ""

