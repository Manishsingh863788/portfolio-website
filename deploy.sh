#!/bin/bash

echo "� Firrebase Portfolio Deployment Script"
echo "======================================="

# Build the React app first
echo "🏗️ Building React application..."
cd client
npm run build
cd ..

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "� In itializing Git repository..."
    git init
    git branch -M main
fi

# Add only essential files for Firebase deployment
echo "📁 Adding essential files to Git..."
git add .gitignore
git add package.json
git add server.js
git add client/package.json
git add client/public/
git add client/src/
git add client/build/
git add DEPLOYMENT.md
git add README.md 2>/dev/null || echo "README.md not found, skipping..."

# Commit changes
echo "💾 Committing changes..."
git commit -m "Portfolio ready for Firebase deployment - $(date)"

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
echo "🔥 Firebase Deployment Steps:"
echo "1. Install Firebase CLI: npm install -g firebase-tools"
echo "2. Login to Firebase: firebase login"
echo "3. Initialize Firebase: firebase init"
echo "   - Select Hosting"
echo "   - Choose 'client/build' as public directory"
echo "   - Configure as single-page app: Yes"
echo "4. Deploy: firebase deploy"
echo ""
echo "🎉 Your portfolio will be live on Firebase!"