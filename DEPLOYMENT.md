# 🚀 Portfolio Deployment Guide

## Quick Deploy Options

### 1. VERCEL (Recommended)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Portfolio ready for deployment"
git branch -M main
git remote add origin https://github.com/Manishsingh863788/portfolio.git
git push -u origin main

# 2. Deploy on Vercel
# - Go to vercel.com
# - Import GitHub repo
# - Deploy automatically!
```

### 2. NETLIFY
```bash
# 1. Build the project
cd client
npm run build

# 2. Deploy on Netlify
# - Go to netlify.com
# - Drag & drop the 'build' folder
# OR connect GitHub repo
```

### 3. GITHUB PAGES (Frontend Only)
```bash
# 1. Install gh-pages
cd client
npm install --save-dev gh-pages

# 2. Add to client/package.json scripts:
"homepage": "https://manishsingh863788.github.io/portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# 3. Deploy
npm run deploy
```

## Environment Variables
For production, set these environment variables:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app password
- `NODE_ENV`: production

## Build Commands
- **Frontend**: `cd client && npm run build`
- **Backend**: `npm start`
- **Full Stack**: `npm run build && npm start`

## Live URLs After Deployment
- **Vercel**: https://portfolio-manishsingh863788.vercel.app
- **Netlify**: https://manishsingh-portfolio.netlify.app
- **GitHub Pages**: https://manishsingh863788.github.io/portfolio

## Troubleshooting
1. **Build fails**: Check Node.js version (use 18+)
2. **API not working**: Set environment variables
3. **Routing issues**: Check _redirects file in client/public
4. **Images not loading**: Use relative paths or add to public folder

Your portfolio is ready to deploy! 🎉