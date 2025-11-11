# GitHub Pages Deployment Setup

This project is configured for static deployment to GitHub Pages.

## Configuration Changes Made

### 1. **next.config.mjs**
- Added `output: 'export'` - enables static site generation
- Added `trailingSlash: true` - ensures proper routing on GitHub Pages
- Removed invalid `eslint` config option

### 2. **Removed Conflicts**
- Deleted legacy `index.html` file from root (prevents conflicts with Next.js routing)

### 3. **Blog Newsletter Integration**
- Updated subscription handler to use direct MailerLite API endpoint
- Works with static deployment without server-side API routes

## Setting Up GitHub Pages

### Step 1: Repository Settings
1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Under "Source", select **"Deploy from a branch"**
4. Select branch: `main`
5. Select folder: `/ (root)`
6. Click **Save**

### Step 2: Configure Custom Domain (Optional)
1. In GitHub Pages settings, add your custom domain: `coglabs.ai`
2. Update your domain DNS records to point to GitHub Pages:
   - Add CNAME record pointing to `shand-j.github.io`
   - OR add A records pointing to GitHub Pages IP addresses

## How It Works

1. **Local Development**: `pnpm dev`
2. **Build Static Site**: `pnpm build` (creates `out/` directory with static HTML/CSS/JS)
3. **Push to GitHub**: `git push origin main`
4. **GitHub Pages**: Automatically deploys the `out/` directory to your GitHub Pages site

## Deployment Status

✅ **All routes are now static and will work on GitHub Pages:**
- `/` - Home page
- `/blog` - Blog listing
- `/blog/microservices-testing-best-practices` - Blog article
- `/contract-testing-guide` - Knowledge base guide

⚠️ **Note on API Routes:**
- The `/api/subscribe` route cannot execute on GitHub Pages (static-only)
- Newsletter subscription uses direct MailerLite client-side API
- This is a limitation of GitHub Pages (no server-side execution)

## Troubleshooting

### Pages not deploying?
- Verify repository settings point to `main` branch with `/` (root) folder
- Check repository settings - Pages should show your domain
- Ensure the `out/` directory was created by the build

### Custom domain not working?
- Verify CNAME/A records are correctly configured
- GitHub Pages deployment may take a few minutes
- Check repository settings - Pages should show your domain

### Routes showing 404?
- Clear browser cache
- Verify `trailingSlash: true` in `next.config.mjs`
- Check that static pages were generated in build output

## Rebuilding and Redeploying

To rebuild and redeploy:
```bash
pnpm build
git add -A
git commit -m "Update content"
git push origin main
```

GitHub Pages will automatically serve the updated static files from the `out/` directory.

## Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
