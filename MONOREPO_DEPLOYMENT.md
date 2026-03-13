# MONOREPO DEPLOYMENT - Single GitHub Repo

## ✅ SETUP: One Repo for Backend + Frontend

Your structure is already perfect for monorepo:

```
srisamskruthi/  ← ONE GitHub repo
├── backend/    ← Backend code
├── frontend/   ← Frontend code
├── docs/       ← Documentation
└── README.md
```

---

## 🚀 DEPLOYMENT (MONOREPO APPROACH)

### STEP 1: Create Single GitHub Repo (5 min)

```powershell
cd c:\Users\yuvas\Desktop\website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "SriSamskruthi - Complete e-commerce platform"

# Create GitHub repo named: srisamskruthi
# Then:
git remote add origin https://github.com/YOUR_USERNAME/srisamskruthi.git
git branch -M main
git push -u origin main
```

**Result:** Everything in one repo!

---

### STEP 2: Deploy Backend to Render (5 min)

**On Render.com:**

1. Click "New +" → "Web Service"
2. Select `srisamskruthi` repo from GitHub
3. Set **Root Directory:** `backend`
4. Fill form:
   ```
   Name: srisamskruthi-backend
   Build: npm install
   Start: npm start
   ```
5. Add Environment Variables:
   ```
   MONGO_URI=mongodb://localhost:27017/srisamskruthi
   NODE_ENV=production
   ALLOWED_ORIGINS=https://srisamskruthi.vercel.app
   ```
6. Deploy!
7. **Get Backend URL:** `https://srisamskruthi-backend.onrender.com`

---

### STEP 3: Deploy Frontend to Vercel (5 min)

**On Vercel.com:**

1. Click "Add New" → "Project"
2. Import `srisamskruthi` repo
3. **Select Framework:** Vite
4. Set **Root Directory:** `frontend`
5. Add Environment Variables:
   ```
   VITE_API_BASE_URL=https://srisamskruthi-backend.onrender.com/api
   VITE_RAZORPAY_KEY_ID=rzp_test_1234567890
   ```
6. Deploy!
7. **Get Frontend URL:** `https://srisamskruthi.vercel.app`

---

## ✅ ADVANTAGES OF MONOREPO

✅ Single GitHub repo (easier to manage)
✅ Single git history
✅ One deployment pipeline
✅ Shared documentation
✅ Easy version control
✅ Simple for client to manage
✅ All code in one place

---

## 📋 MONOREPO SETUP CHECKLIST

- [x] Backend folder has package.json
- [x] Frontend folder has package.json
- [x] Root .gitignore created
- [x] Documentation at root level
- [x] Separate .env files for each service
- [x] Root README.md guides to each

---

## 🔄 UPDATING CODE IN MONOREPO

### To Update Backend:
```powershell
cd backend
# Make changes
git add backend/
git commit -m "Update backend: [description]"
git push
# Render auto-deploys
```

### To Update Frontend:
```powershell
cd frontend
# Make changes
git add frontend/
git commit -m "Update frontend: [description]"
git push
# Vercel auto-deploys
```

---

## 💡 TIPS

1. **Root .gitignore** should ignore both `node_modules/` folders
2. **Separate .env files** for backend and frontend
3. **Different deployment triggers** - each deploys independently
4. **Easier for client** - one GitHub repo to manage

---

## 📊 FINAL STRUCTURE

```
GitHub: srisamskruthi
│
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   └── ... (all backend files)
│
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── .env.local
│   └── ... (all frontend files)
│
├── docs/ (optional)
│   ├── DEPLOYMENT_CLIENT_GUIDE.md
│   └── ...
│
├── .gitignore (root level)
└── README.md (root level)
```

---

## ✅ QUICK COMMANDS

```powershell
# Initial setup
cd c:\Users\yuvas\Desktop\website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/srisamskruthi.git
git push -u origin main

# After making changes
git add .
git commit -m "Description"
git push
# Both Render & Vercel auto-deploy their respective services!
```

---

## 🎯 RESULT

**GitHub:** One repo
**Deployment:** Two services (auto-deploy on push)
**Client:** One repo to manage
**You:** Simpler maintenance

**Status: READY FOR MONOREPO DEPLOYMENT** ✅
