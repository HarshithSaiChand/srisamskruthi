@echo off
echo.
echo ====================================================
echo   SriSamskruthi - E-Commerce Setup
echo   Handcrafted Traditional Jewellery
echo ====================================================
echo.

:: Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo Node.js version:
node -v
echo.

:: Install backend dependencies
echo ====================================================
echo Installing Backend Dependencies...
echo ====================================================
cd backend
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install backend dependencies
    pause
    exit /b 1
)
cd ..

echo.

:: Install frontend dependencies
echo ====================================================
echo Installing Frontend Dependencies...
echo ====================================================
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install frontend dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo ====================================================
echo ✓ Installation Complete!
echo ====================================================
echo.
echo Next steps:
echo 1. Configure MongoDB:
echo    - Open backend\.env
echo    - Set your MONGO_URI
echo.
echo 2. Start Backend:
echo    - Open Command Prompt
echo    - Navigate to backend folder
echo    - Run: npm run dev
echo.
echo 3. Start Frontend:
echo    - Open Command Prompt
echo    - Navigate to frontend folder
echo    - Run: npm run dev
echo.
echo 4. Open browser:
echo    - Go to http://localhost:5173
echo.
echo ====================================================
pause
