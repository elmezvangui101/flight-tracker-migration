# FlightCents Migration Landing Page

This repository contains the migration landing page for redirecting users from the old Vercel domain to the new FlightCents.com domain.

## 📁 Files Included

- `index.html` - Main landing page with migration messaging
- `styles.css` - Complete styling with animations
- `script.js` - Countdown timer and interactive features
- `vercel.json` - Vercel configuration with 301 redirects

## 🚀 Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to GitHub.com and sign in
2. Click the "+" icon (top right) → "New repository"
3. Name it: `flight-tracker-migration`
4. Make it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README (we're uploading these files)
6. Click "Create repository"

### Step 2: Upload Files to GitHub

**Option A: Web Interface (Easiest)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop all 4 files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `vercel.json`
3. Add commit message: "Initial migration page setup"
4. Click "Commit changes"

**Option B: Git Command Line**

```bash
# In your local folder with these files
git init
git add .
git commit -m "Initial migration page setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/flight-tracker-migration.git
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository: `flight-tracker-migration`
4. Configure project:
   - **Framework Preset**: Other (or leave as detected)
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
5. Click "Deploy"

### Step 4: Connect Custom Domain

1. After deployment, go to Project Settings → Domains
2. Add your domain: `flight-training-cost-tracker-v2.vercel.app`
3. Vercel will automatically configure it
4. Wait 1-2 minutes for DNS propagation

### Step 5: Test the Redirect

1. Visit: `https://flight-training-cost-tracker-v2.vercel.app`
2. You should see the migration page
3. Wait 10 seconds OR click the button
4. Verify it redirects to `https://flightcents.com`

## ⚙️ Configuration Options

### Change Redirect Timing

Edit `script.js`, line 2:
```javascript
let timeLeft = 10; // Change to 5, 15, 20, etc.
```

### Update Destination URL

Edit both:
- `index.html` line 9: Change meta refresh URL
- `script.js` line 28: Change redirect destination
- `vercel.json` line 5: Change permanent redirect destination

### Disable Auto-Redirect

Comment out the redirect in `script.js`:
```javascript
// if (timeLeft <= 0) {
//     clearInterval(timerInterval);
//     redirectNow();
// }
```

## 📊 Analytics Setup

To track migration page views, add Google Analytics:

In `index.html`, add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your GA4 tracking ID.

## 🔧 Troubleshooting

**Redirect not working?**
- Check `vercel.json` is in root directory
- Verify domain is correctly configured in Vercel
- Clear browser cache (Ctrl+Shift+R)

**Page looks broken?**
- Ensure all 4 files are in the same directory
- Check browser console for errors (F12)
- Verify `styles.css` and `script.js` are loading

**301 redirect not permanent?**
- Check Vercel deployment logs
- Verify `statusCode: 301` in `vercel.json`
- Test with online redirect checker tools

## 📞 Support

Questions? Contact: support@flightcents.com

## 📄 License

This migration page is part of the FlightCents project.
