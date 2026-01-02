#!/bin/bash

# Spanish Learning Tool - Deployment Script
# This script helps you deploy to GitHub Pages

echo "🚀 Spanish Learning Tool - Deployment Helper"
echo ""

# Check if GitHub remote exists
if git remote get-url origin &>/dev/null; then
    echo "✅ GitHub remote already configured"
    REMOTE_URL=$(git remote get-url origin)
    echo "   Remote: $REMOTE_URL"
else
    echo "📝 To deploy to GitHub Pages, follow these steps:"
    echo ""
    echo "1. Go to https://github.com/new and create a new repository"
    echo "   - Name it: spanish-learning-tool (or any name you like)"
    echo "   - Make it PUBLIC (required for free GitHub Pages)"
    echo "   - DON'T initialize with README, .gitignore, or license"
    echo ""
    echo "2. After creating the repo, run these commands:"
    echo ""
    echo "   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "3. Then go to your repo on GitHub:"
    echo "   - Click Settings → Pages"
    echo "   - Source: Deploy from a branch"
    echo "   - Branch: main, folder: / (root)"
    echo "   - Click Save"
    echo ""
    echo "4. Your site will be live at:"
    echo "   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
    echo ""
    read -p "Have you created the GitHub repository? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub username: " GITHUB_USER
        read -p "Enter your repository name: " REPO_NAME
        echo ""
        echo "Adding remote and pushing..."
        git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git
        git branch -M main
        git push -u origin main
        echo ""
        echo "✅ Done! Now enable GitHub Pages in your repo settings."
        echo "   Your site will be at: https://$GITHUB_USER.github.io/$REPO_NAME/"
    else
        echo "Create the repository first, then run this script again."
    fi
fi

