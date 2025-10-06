# Deploying TechShop to Vercel

This guide will walk you through deploying your TechShop application to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Vercel CLI (optional, for command-line deployment)

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose your repository from the list
5. Configure your project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Once deployed, you'll get a URL like: `https://your-project-name.vercel.app`

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- **Set up and deploy**: Yes
- **Which scope**: Select your account
- **Link to existing project**: No
- **Project name**: (accept default or enter custom name)
- **Directory**: `./`
- **Override settings**: No

### Step 4: Deploy to Production

```bash
vercel --prod
```

## How the Deployment Works

### Frontend
- Vite builds your React app into static files in the `dist/` folder
- Vercel serves these static files globally via CDN

### Backend API
- The Express server is converted to Vercel Serverless Functions
- API routes are accessible at `/api/products` and `/api/checkout`
- The `api/index.js` file contains your serverless function code

### Configuration
- `vercel.json` tells Vercel how to route requests
- Static files are served directly
- API routes (`/api/*`) are routed to serverless functions

## Post-Deployment

### Get Your Live URL

After deployment, Vercel provides:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URLs**: Unique URLs for each commit/branch

### Update README.md

Replace the placeholder links in your README.md with your actual Vercel URL:

```markdown
## 🎥 Demo & Live Preview

- **Live Preview**: [View Live Application](https://your-project-name.vercel.app)
- **Demo Video**: [Watch Demo](#) _(Add your video link here)_
```

## Environment Variables (If Needed)

If you need to add environment variables:

1. Go to your project on Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add your variables
4. Redeploy for changes to take effect

## Automatic Deployments

Once connected to Git, Vercel automatically:
- **Production**: Deploys every push to `main` branch
- **Preview**: Creates preview deployments for pull requests

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project on Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your domain and follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check the build logs on Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### API Routes Not Working
- Verify `vercel.json` configuration is correct
- Check that `api/index.js` exists and exports the Express app
- View function logs on Vercel Dashboard under **Functions**

### 404 Errors
- Make sure your frontend routes use React Router's `BrowserRouter`
- Vercel automatically handles SPA routing with the current configuration

## Useful Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs [deployment-url]

# List all deployments
vercel ls

# Remove a deployment
vercel rm [deployment-url]
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Deploying Vite Apps](https://vitejs.dev/guide/static-deploy.html#vercel)

---

**Need Help?** Check the [Vercel Support](https://vercel.com/support) or refer to the [Vercel Community](https://github.com/vercel/vercel/discussions).
