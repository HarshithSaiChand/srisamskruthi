# SRISAMSKRUTHI - QUICK START DEPLOYMENT

## ⚡ FASTEST DEPLOYMENT PATH (30 MINUTES)

### STEP 1: Create GitHub Repos (5 min)

#### Backend Repo:
```powershell
cd c:\Users\yuvas\Desktop\website\backend
git init
git add .
git commit -m "Initial backend deployment"
# Go to GitHub.com → New Repository → srisamskruthi-backend
# Copy the push commands and run them
```

#### Frontend Repo:
```powershell
cd c:\Users\yuvas\Desktop\website\frontend
git init
git add .
git commit -m "Initial frontend deployment"
# Go to GitHub.com → New Repository → srisamskruthi-frontend
# Copy the push commands and run them
```

---

### STEP 2: Deploy Backend to Render (5 min)

1. **Go to render.com** → Sign up with GitHub
2. **Click "New +" → "Web Service"**
3. **Connect GitHub → Select `srisamskruthi-backend`**
4. **Fill in form:**
   - Name: `srisamskruthi-backend`
   - Runtime: Node
   - Build: `npm install`
   - Start: `npm start`

5. **Add Environment Variables:**
   ```
   MONGO_URI=mongodb://localhost:27017/srisamskruthi
   NODE_ENV=production
   PORT=5000
   ALLOWED_ORIGINS=https://srisamskruthi.vercel.app
   ```

6. **Click "Create Web Service"**
7. **Wait for deployment (2-3 min)**
8. **Copy your Backend URL:** `https://srisamskruthi-backend.onrender.com`

---

### STEP 3: Deploy Frontend to Vercel (5 min)

1. **Go to vercel.com** → Sign up with GitHub
2. **Click "Add New" → "Project"**
3. **Import `srisamskruthi-frontend` repo**
4. **Framework: Vite**
5. **Add Environment Variables:**
   ```
   VITE_API_BASE_URL=https://srisamskruthi-backend.onrender.com/api
   VITE_RAZORPAY_KEY_ID=rzp_test_1234567890
   ```
6. **Click "Deploy"**
7. **Wait (1-2 min)**
8. **Copy Frontend URL:** `https://srisamskruthi.vercel.app`

---

### STEP 4: Update Backend CORS (2 min)

**Backend on Render:**
- Settings → Environment Variables
- Update `ALLOWED_ORIGINS`: Add your Vercel URL
- Redeploy

---

### STEP 5: Update Frontend API URL (2 min)

**Frontend on Vercel:**
- Settings → Environment Variables  
- Update `VITE_API_BASE_URL`: Add Render backend URL
- Redeploy

---

### ✅ DEPLOYMENT COMPLETE!

Your website is now LIVE:
- **Frontend:** https://srisamskruthi.vercel.app
- **Backend:** https://srisamskruthi-backend.onrender.com
- **API:** https://srisamskruthi-backend.onrender.com/api

---

## 🔐 SEND TO CLIENT

Create a file with:
```
LIVE WEBSITE: https://srisamskruthi.vercel.app

BACKEND API: https://srisamskruthi-backend.onrender.com

DATABASE:
- Platform: MongoDB (local for now, upgrade to Atlas for production)
- Name: srisamskruthi
- Collections: products, orders

GITHUB REPOS:
- Backend: https://github.com/[your-username]/srisamskruthi-backend
- Frontend: https://github.com/[your-username]/srisamskruthi-frontend

HOW TO MANAGE PRODUCTS:
1. Go to GitHub backend repo
2. Open seed-products.js
3. Click pencil icon to edit
4. Add/modify products
5. Commit changes
6. Render auto-deploys (2-3 min)
7. Check website - products update!

DATABASE BACKUP:
- MongoDB Atlas (upgrade when needed)
- Current: Local MongoDB

PAYMENT:
- Razorpay (client's own account)
- Test Key: [key from .env]

SUPPORT: [Your email/phone]
```

---

## 📋 CHECKLIST

- [ ] GitHub repos created
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] API URLs updated
- [ ] CORS configured
- [ ] Website loads
- [ ] Products display
- [ ] Client credentials prepared
- [ ] Support instructions sent

---

## 🚀 AFTER DEPLOYMENT

### Client needs to do:
1. **Upgrade MongoDB** (from localhost to MongoDB Atlas)
2. **Get Razorpay live keys** (apply for business account)
3. **Custom domain** (optional, via Vercel)
4. **Start taking orders!**

### You can help with:
- Product updates
- Payment configuration
- Database migration
- Custom features

---

**Status: READY FOR LIVE DEPLOYMENT ✅**
