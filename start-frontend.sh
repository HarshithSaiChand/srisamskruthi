#!/bin/bash

echo ""
echo "===================================================="
echo "   SriSamskruthi Frontend Server"
echo "   Handcrafted Traditional Jewellery"
echo "===================================================="
echo ""
echo "Starting frontend server on port 5173..."
echo ""

cd frontend || exit 1
npm run dev
