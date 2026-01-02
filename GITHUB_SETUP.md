# 🚀 Step-by-Step: Deploy to GitHub Pages

Follow these steps **in order** to get your Spanish Learning Tool live on GitHub Pages.

---

## ✅ Step 1: Configure Git (One-time setup)

Open Terminal and run these commands:

```bash
cd /Users/alesia/Downloads/assets-hub
git config user.name "Alesia"
git config user.email "your-email@example.com"
```

**Replace `your-email@example.com` with your actual email address.**

---

## ✅ Step 2: Commit Your Files

Run this command in Terminal:

```bash
cd /Users/alesia/Downloads/assets-hub
git commit -m "Spanish Learning Tool - Initial commit"
```

---

## ✅ Step 3: Create GitHub Repository

1. **Open your browser** and go to: https://github.com/new
2. **Repository name**: `spanishAI` ⭐ (This will be your domain name!)
3. **Description** (optional): "Interactive Spanish learning web app"
4. **Make it PUBLIC** ⚠️ (Required for free GitHub Pages)
5. **DO NOT** check any of these boxes:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click the green **"Create repository"** button

---

## ✅ Step 4: Connect and Push to GitHub

After creating the repository, GitHub will show you instructions. **But use these commands instead:**

```bash
cd /Users/alesia/Downloads/assets-hub
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

**Replace:**
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with the repository name you created in Step 3

**Example:**
If your username is `alesia` and repo is `spanishAI`:
```bash
git remote add origin https://github.com/alesia/spanishAI.git
```

---

## ✅ Step 5: Enable GitHub Pages

1. Go to your repository on GitHub (refresh the page if needed)
2. Click **"Settings"** tab (top right of the repository page)
3. Scroll down in the left sidebar and click **"Pages"**
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **"Save"** button
6. Wait 1-2 minutes for GitHub to build your site

---

## ✅ Step 6: Your Site is Live! 🎉

After 1-2 minutes, your site will be available at:

**`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`**

**Example:**
`https://YOUR-USERNAME.github.io/spanishAI/`

**Your final URL will be:**
`https://YOUR-USERNAME.github.io/spanishAI/`

You can find this URL in your repository Settings → Pages section.

---

## 🆘 Troubleshooting

**Problem**: "Permission denied" when pushing
- **Solution**: Make sure you're logged into GitHub and have the correct username

**Problem**: "Repository not found"
- **Solution**: Check that you spelled your username and repo name correctly

**Problem**: Site shows 404 after enabling Pages
- **Solution**: Wait 2-3 minutes, then refresh. Make sure your repo is PUBLIC.

**Problem**: Git asks for username/password
- **Solution**: Use a Personal Access Token instead of password:
  1. Go to GitHub → Settings → Developer settings → Personal access tokens
  2. Generate new token with "repo" permissions
  3. Use the token as your password

---

## 📝 Quick Command Reference

Copy and paste these commands (replace placeholders):

```bash
# Step 1: Configure (one-time)
cd /Users/alesia/Downloads/assets-hub
git config user.name "Alesia"
git config user.email "your-email@example.com"

# Step 2: Commit
git commit -m "Spanish Learning Tool - Initial commit"

# Step 3: Create repo on GitHub (do this in browser)

# Step 4: Push to GitHub
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/spanishAI.git
git push -u origin main

# Step 5: Enable Pages (do this in browser)
```

---

**Need help?** Let me know which step you're on and I'll help! 🚀

