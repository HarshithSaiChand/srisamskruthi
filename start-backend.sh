#!/bin/bash

echo ""
echo "===================================================="
echo "   SriSamskruthi Backend Server"
echo "   Handcrafted Traditional Jewellery"
echo "===================================================="
echo ""
echo "Starting backend server on port 5000..."
echo ""

cd backend || exit 1
npm run dev
