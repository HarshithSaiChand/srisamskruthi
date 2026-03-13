@echo off
REM SRISAMSKRUTHI - AUTOMATED DEPLOYMENT (Windows)
REM Copy and paste these commands in order

echo.
echo ==========================================
echo SRISAMSKRUTHI DEPLOYMENT AUTOMATION
echo ==========================================
echo.

REM STEP 1: Initialize Git Repos
echo STEP 1: Initializing Git Repositories...
echo.

REM Backend
echo Initializing Backend Repository...
cd /d C:\Users\yuvas\Desktop\website\backend
git init
git add .
git commit -m "Initial commit: Backend for SriSamskruthi"
echo OK - Backend repo initialized
echo.
echo Next: Create repo on GitHub (srisamskruthi-backend)
echo Then run these commands:
echo   git remote add origin https://github.com/YOUR_USERNAME/srisamskruthi-backend.git
echo   git branch -M main
echo   git push -u origin main
echo.
pause

echo ==========================================
echo.

REM Frontend
echo Initializing Frontend Repository...
cd /d C:\Users\yuvas\Desktop\website\frontend
git init
git add .
git commit -m "Initial commit: Frontend for SriSamskruthi"
echo OK - Frontend repo initialized
echo.
echo Next: Create repo on GitHub (srisamskruthi-frontend)
echo Then run these commands:
echo   git remote add origin https://github.com/YOUR_USERNAME/srisamskruthi-frontend.git
echo   git branch -M main
echo   git push -u origin main
echo.
pause

echo ==========================================
echo.

echo STEP 2: Create GitHub Repositories
echo.
echo Do this manually at github.com:
echo 1. Create new repo: srisamskruthi-backend
echo 2. Create new repo: srisamskruthi-frontend
echo 3. Copy the push commands and run them
echo.
pause

echo ==========================================
echo.

echo STEP 3: Deploy Backend to Render
echo.
echo Do this manually at render.com:
echo.
echo 1. Sign up with GitHub
echo 2. Click "New +" then "Web Service"
echo 3. Select "srisamskruthi-backend" from GitHub
echo.
echo 4. Fill in form:
echo    Name: srisamskruthi-backend
echo    Build: npm install
echo    Start: npm start
echo.
echo 5. Add Environment Variables:
echo    MONGO_URI = mongodb://localhost:27017/srisamskruthi
echo    NODE_ENV = production
echo    ALLOWED_ORIGINS = https://srisamskruthi.vercel.app
echo.
echo 6. Click "Create Web Service"
echo.
echo COPY YOUR RENDER URL AFTER DEPLOYMENT
echo.
pause

echo ==========================================
echo.

echo STEP 4: Deploy Frontend to Vercel
echo.
echo Do this manually at vercel.com:
echo.
echo 1. Sign up with GitHub
echo 2. Click "Add New" then "Project"
echo 3. Import "srisamskruthi-frontend" from GitHub
echo.
echo 4. Framework: Vite
echo.
echo 5. Add Environment Variables:
echo    VITE_API_BASE_URL = https://your-backend.onrender.com/api
echo    VITE_RAZORPAY_KEY_ID = rzp_test_1234567890
echo.
echo 6. Click "Deploy"
echo.
echo COPY YOUR VERCEL URL AFTER DEPLOYMENT
echo.
pause

echo ==========================================
echo.

echo SUCCESS - DEPLOYMENT COMPLETE!
echo.
echo Your website is now LIVE at:
echo   Frontend: https://srisamskruthi.vercel.app
echo   Backend: https://your-backend.onrender.com
echo.
echo Next Steps:
echo 1. Test the website
echo 2. Share credentials with client
echo 3. Use CLIENT_FINAL_DELIVERY.md for client onboarding
echo.
pause
