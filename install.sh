#!/bin/bash

# SriSamskruthi - E-Commerce Setup Script
# Handcrafted Traditional Jewellery

echo ""
echo "===================================================="
echo "   SriSamskruthi - E-Commerce Setup"
echo "   Handcrafted Traditional Jewellery"
echo "===================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "Node.js version:"
node -v
echo ""

# Install backend dependencies
echo "===================================================="
echo "Installing Backend Dependencies..."
echo "===================================================="
cd backend || exit 1
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install backend dependencies"
    exit 1
fi
cd ..

echo ""

# Install frontend dependencies
echo "===================================================="
echo "Installing Frontend Dependencies..."
echo "===================================================="
cd frontend || exit 1
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install frontend dependencies"
    exit 1
fi
cd ..

echo ""
echo "===================================================="
echo "✓ Installation Complete!"
echo "===================================================="
echo ""
echo "Next steps:"
echo "1. Configure MongoDB:"
echo "   - Open backend/.env"
echo "   - Set your MONGO_URI"
echo ""
echo "2. Start Backend:"
echo "   - Open Terminal"
echo "   - Navigate to backend folder"
echo "   - Run: npm run dev"
echo ""
echo "3. Start Frontend:"
echo "   - Open Terminal"
echo "   - Navigate to frontend folder"
echo "   - Run: npm run dev"
echo ""
echo "4. Open browser:"
echo "   - Go to http://localhost:5173"
echo ""
echo "===================================================="
