# 🚀 How to Deploy Your Spanish Learning Tool

## Option 1: Netlify (EASIEST - 2 minutes) ⭐ Recommended

1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Sign up for free (or log in)
3. On the dashboard, you'll see a "Sites" section
4. **Drag and drop** your entire `assets-hub` folder onto the deploy area
5. Wait 10 seconds - your site is live!
6. You'll get a URL like `random-name-12345.netlify.app`
7. Click "Site settings" → "Change site name" to customize it
8. Share the URL with friends! 🎉

**That's it! No coding needed.**

---

## Option 2: GitHub Pages (Free, but takes 5 minutes)

### Step 1: Set up Git (one-time setup)
Open Terminal and run:
```bash
cd /Users/alesia/Downloads/assets-hub
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 2: Create GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `spanish-learning-tool` (or any name)
3. Make it **PUBLIC** (required for free GitHub Pages)
4. **DON'T** check "Add a README file"
5. Click "Create repository"

### Step 3: Push to GitHub
Copy and paste these commands in Terminal:
```bash
cd /Users/alesia/Downloads/assets-hub
git add index.html style.css script.js README.md .gitignore
git commit -m "Spanish Learning Tool"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```
(Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values)

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

---

## Option 3: Vercel (Similar to Netlify)

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up for free
3. Click "New Project"
4. Drag and drop your `assets-hub` folder
5. Click "Deploy"
6. Done! Your site is live.

---

## Quick Comparison

| Platform | Speed | Difficulty | Custom Domain |
|----------|-------|------------|---------------|
| **Netlify** | ⚡ Fastest | ⭐ Easiest | ✅ Free |
| **Vercel** | ⚡ Fast | ⭐ Easy | ✅ Free |
| **GitHub Pages** | 🐢 Slower | ⭐⭐ Medium | ✅ Free |

**Recommendation: Use Netlify - it's the fastest and easiest!**

---

## Need Help?

If you get stuck, just drag and drop your folder to Netlify - it's that simple! 🎉

