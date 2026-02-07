#!/bin/bash

# OpportunityX Deployment Script for Render
# This script prepares your app for deployment

echo "🚀 OpportunityX - Render Deployment Helper"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git repository already initialized"
fi

# Check if remote origin exists
if git remote | grep -q origin; then
    echo "✅ Remote origin already configured"
else
    echo ""
    echo "⚠️  No remote origin configured"
    echo "Please create a GitHub repository and run:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/opportunityx.git"
    echo ""
fi

# Add all files
echo ""
echo "📝 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "✅ No new changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Prepare for Render deployment - $(date +%Y-%m-%d)"
    echo "✅ Changes committed"
fi

# Show git status
echo ""
echo "📊 Current Git Status:"
git status

echo ""
echo "=========================================="
echo "🎯 Next Steps:"
echo "=========================================="
echo ""
echo "1. Create GitHub repository (if not done):"
echo "   https://github.com/new"
echo ""
echo "2. Connect your repository:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/opportunityx.git"
echo ""
echo "3. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "4. Deploy on Render:"
echo "   https://dashboard.render.com/"
echo "   → Click 'New +' → 'Static Site'"
echo "   → Connect your GitHub repo"
echo "   → Click 'Create Static Site'"
echo ""
echo "5. Your app will be live in 2-3 minutes! 🎉"
echo ""
echo "=========================================="
echo "📚 For detailed instructions, see:"
echo "   DEPLOYMENT_GUIDE.md"
echo "=========================================="
