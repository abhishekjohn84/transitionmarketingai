# TransitionMarketingAI Website Version Control Guide

## Repository Information
- **Repository**: TransitionMarketingAI Website
- **Platform**: GitHub Pages
- **Deployment**: Automatic via GitHub Actions

## Version Control Workflow

### 1. Development Process
```bash
# Make changes to source files
# Test locally with: pnpm run dev

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Description of changes"

# Push to trigger deployment
git push origin main
```

### 2. Automatic Deployment
- Every push to `main` branch triggers GitHub Actions
- Site builds automatically with pnpm
- Deploys to GitHub Pages at demo.transitionmarketingai.com

### 3. Version Management
- Use semantic versioning (MAJOR.MINOR.PATCH)
- Update version in package.json for releases
- Tag important releases: `git tag v1.0.0`

## File Structure
```
src/
├── App.jsx          # Main application component
├── pages.jsx        # Individual page components
├── App.css          # Styling
└── main.jsx         # Entry point

public/
├── CNAME           # Custom domain configuration
└── index.html      # HTML template

.github/workflows/
└── deploy.yml      # GitHub Actions deployment
```

## Best Practices
- Test all changes locally before pushing
- Use descriptive commit messages
- Keep components modular and reusable
- Maintain consistent branding throughout

