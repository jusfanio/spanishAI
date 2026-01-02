#!/bin/bash

echo "🚀 Pushing spanishAI to GitHub..."
echo ""

cd /Users/alesia/Downloads/assets-hub

# Make sure remote is set correctly
git remote remove origin 2>/dev/null
git remote add origin https://github.com/jusfanio/spanishAI.git

# Push to GitHub
echo "Pushing files to GitHub..."
echo "When prompted:"
echo "  Username: jusfanio"
echo "  Password: Use your GitHub Personal Access Token"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Files pushed to GitHub!"
    echo ""
    echo "Next steps:"
    echo "1. Go to: https://github.com/jusfanio/spanishAI"
    echo "2. Click Settings → Pages"
    echo "3. Select branch: main, folder: / (root)"
    echo "4. Click Save"
    echo "5. Your site will be at: https://jusfanio.github.io/spanishAI/"
else
    echo ""
    echo "❌ Push failed. You may need to:"
    echo "1. Generate a new token at: https://github.com/settings/tokens"
    echo "2. Make sure it has 'repo' permissions"
    echo "3. Use the token as your password when prompted"
fi

