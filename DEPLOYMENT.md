# GitHub Pages Deployment Instructions

## Automatic Staging Deployment Setup

This repository is configured for automatic deployment to **demo.transitionmarketingai.com** via GitHub Pages.

### How it works:
1. **Push to main/master branch** → Triggers automatic build and deployment
2. **GitHub Actions** builds the React app using `npm run build`
3. **GitHub Pages** serves the built files at demo.transitionmarketingai.com
4. **CNAME record** ensures the custom domain works permanently

### Setup Requirements:

#### 1. GitHub Repository Settings:
- Go to **Settings** → **Pages**
- Source: **GitHub Actions**
- Custom domain: **demo.transitionmarketingai.com**

#### 2. DNS Configuration (One-time setup):
Add this CNAME record to your domain DNS:
```
demo.transitionmarketingai.com → [your-github-username].github.io
```

#### 3. Repository Permissions:
Ensure GitHub Actions has permissions:
- Go to **Settings** → **Actions** → **General**
- Workflow permissions: **Read and write permissions**

### Files Created:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Domain configuration
- `vite.config.js` - Optimized build settings

### Usage:
1. Make changes to your code
2. Commit and push to main/master branch
3. GitHub Actions automatically builds and deploys
4. Changes appear at demo.transitionmarketingai.com within 2-3 minutes

**No more manual CNAME configuration needed!**

