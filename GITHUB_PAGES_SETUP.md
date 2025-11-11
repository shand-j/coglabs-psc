# GitHub Pages Deployment Setup

This project is configured for static deployment to GitHub Pages.

## Configuration Changes Made

### 1. **next.config.mjs**
- Added `output: 'export'` - enables static site generation
- Added `trailingSlash: true` - ensures proper routing on GitHub Pages
- Removed invalid `eslint` config option

### 2. **.nojekyll** (new file)
- Prevents GitHub Pages from processing files through Jekyll
- Ensures static files are served directly

### 3. **.github/workflows/deploy.yml**
- Automated GitHub Actions workflow that builds and deploys to GitHub Pages
- Triggers on push to `main` branch
- Builds static site from `next.js` to `out/` directory
- Deploys to GitHub Pages automatically

### 4. **Removed Conflicts**
- Deleted legacy `index.html` file from root (prevents conflicts with Next.js routing)

### 5. **Blog Newsletter Integration**
- Updated subscription handler to use direct MailerLite API endpoint
- Works with static deployment without server-side API routes

## Setting Up GitHub Pages

### Step 1: Repository Settings
1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Under "Source", select **"GitHub Actions"**
4. Click **Save**

### Step 2: Configure Custom Domain (Optional)
1. In GitHub Pages settings, add your custom domain: `coglabs.ai`
2. Update your domain DNS records to point to GitHub Pages:
   - Add CNAME record pointing to `shand-j.github.io`
   - OR add A records pointing to GitHub Pages IP addresses

### Step 3: Trigger Deployment
1. Push changes to `main` branch
2. GitHub Actions will automatically build and deploy

## How It Works

1. **Local Development**: `pnpm dev`
2. **Build Static Site**: `pnpm build` (creates `out/` directory with static HTML/CSS/JS)
3. **Push to GitHub**: `git push origin main`
4. **GitHub Actions**:
   - Automatically runs the Deploy workflow (watch in Actions tab)
   - Installs dependencies with pnpm
   - Builds the Next.js site to static files in `out/`
   - Uploads to GitHub Pages infrastructure
5. **GitHub Pages**: Serves the static site at your domain (usually within 1-2 minutes)

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
- Go to **Actions** tab and check the "Deploy to GitHub Pages" workflow
- If there's a failure, click the workflow run to see detailed error logs
- Ensure `main` branch has the latest changes
- Repository settings should have "GitHub Actions" selected as the source

### Custom domain not working?
- Verify CNAME/A records are correctly configured with your DNS provider
- GitHub Pages deployment may take a few minutes
- Check repository settings - Pages should show your domain
- Verify the `.nojekyll` file exists in the repository

### Routes showing 404?
- Clear browser cache
- Check the Actions tab to verify deployment completed successfully
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

The GitHub Actions workflow will automatically build and deploy the changes. You can monitor progress in the **Actions** tab of your repository.

## Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
