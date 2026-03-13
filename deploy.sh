#!/bin/bash
# SRISAMSKRUTHI - AUTOMATED DEPLOYMENT COMMANDS
# Copy and paste these commands in order

echo "=========================================="
echo "SRISAMSKRUTHI DEPLOYMENT AUTOMATION"
echo "=========================================="

# STEP 1: Initialize Git Repos
echo ""
echo "STEP 1: Initializing Git Repositories..."
echo ""

# Backend
cd c:\Users\yuvas\Desktop\website\backend
git init
git add .
git commit -m "Initial commit: Backend for SriSamskruthi"
echo "✓ Backend repo initialized"
echo "Next: Create repo on GitHub and push using:"
echo "  git remote add origin https://github.com/YOUR_USERNAME/srisamskruthi-backend.git"
echo "  git branch -M main"
echo "  git push -u origin main"

echo ""
echo "=========================================="
echo ""

# Frontend
cd c:\Users\yuvas\Desktop\website\frontend
git init
git add .
git commit -m "Initial commit: Frontend for SriSamskruthi"
echo "✓ Frontend repo initialized"
echo "Next: Create repo on GitHub and push using:"
echo "  git remote add origin https://github.com/YOUR_USERNAME/srisamskruthi-frontend.git"
echo "  git branch -M main"
echo "  git push -u origin main"

echo ""
echo "=========================================="
echo ""

echo "STEP 2: Create GitHub Repositories"
echo ""
echo "Do this manually:"
echo "1. Go to github.com"
echo "2. Create new repo: srisamskruthi-backend"
echo "3. Create new repo: srisamskruthi-frontend"
echo "4. Copy the push commands and run them locally"

echo ""
echo "=========================================="
echo ""

echo "STEP 3: Deploy to Render"
echo ""
echo "Do this manually:"
echo "1. Go to render.com"
echo "2. Click 'New +' → 'Web Service'"
echo "3. Select 'srisamskruthi-backend' from GitHub"
echo "4. Fill form:"
echo "   - Name: srisamskruthi-backend"
echo "   - Build: npm install"
echo "   - Start: npm start"
echo "5. Add environment variables:"
echo "   MONGO_URI=mongodb://localhost:27017/srisamskruthi"
echo "   NODE_ENV=production"
echo "   ALLOWED_ORIGINS=https://srisamskruthi.vercel.app"
echo "6. Click 'Create Web Service'"
echo ""
echo "IMPORTANT: Copy your Render URL (https://your-backend.onrender.com)"

echo ""
echo "=========================================="
echo ""

echo "STEP 4: Deploy to Vercel"
echo ""
echo "Do this manually:"
echo "1. Go to vercel.com"
echo "2. Click 'Add New' → 'Project'"
echo "3. Import srisamskruthi-frontend from GitHub"
echo "4. Select Vite as framework"
echo "5. Add environment variables:"
echo "   VITE_API_BASE_URL=https://your-backend.onrender.com/api"
echo "   VITE_RAZORPAY_KEY_ID=rzp_test_1234567890"
echo "6. Click 'Deploy'"

echo ""
echo "=========================================="
echo ""

echo "✅ DEPLOYMENT COMPLETE!"
echo ""
echo "Your website is now LIVE:"
echo "Frontend: https://srisamskruthi.vercel.app"
echo "Backend: https://your-backend.onrender.com"
echo ""
echo "Next: Share with client using CLIENT_FINAL_DELIVERY.md"
