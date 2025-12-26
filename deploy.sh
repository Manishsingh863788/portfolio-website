#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Portfolio ready for deployment - $(date)"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/Manishsingh863788/portfolio.git
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "🌐 Now deploy on:"
echo "1. Vercel: https://vercel.com (Recommended)"
echo "2. Netlify: https://netlify.com"
echo "3. GitHub Pages: Run 'cd client && npm run deploy'"
echo ""
echo "🎉 Your portfolio is ready to go live!"