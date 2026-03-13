# How to Add Client Images to Your Website

Your client images are in: `C:\Users\yuvas\Pictures\photo`

This guide shows how to organize them and add to your website.

---

## Quick Setup (5 Steps)

### Step 1: Organize Images by Category
Copy your client images from `C:\Users\yuvas\Pictures\photo` to these folders:

```
frontend/public/images/
├── bangles/          ← Bangle images here
├── chains/           ← Chain images here
├── rings/            ← Ring images here
└── earrings/         ← Earring images here
```

**Folder locations:**
- `c:\Users\yuvas\Desktop\website\frontend\public\images\bangles\`
- `c:\Users\yuvas\Desktop\website\frontend\public\images\chains\`
- `c:\Users\yuvas\Desktop\website\frontend\public\images\rings\`
- `c:\Users\yuvas\Desktop\website\frontend\public\images\earrings\`

**How to copy:**
1. Open File Explorer
2. Go to `C:\Users\yuvas\Pictures\photo`
3. Select images for bangles
4. Copy → Paste to `frontend\public\images\bangles\`
5. Repeat for other categories

---

### Step 2: Rename Images (Optional but Recommended)

Rename images to be clear:
```
gold-bangles-1.jpg
gold-bangles-2.jpg
silver-chain-1.jpg
diamond-ring-1.jpg
pearl-earrings-1.jpg
```

---

### Step 3: Update Product List

Edit `backend/seed-products.js` and add your products:

```javascript
const sampleProducts = [
  {
    name: "Client's Gold Bangles",
    category: "Bangles",
    price: 5999,
    description: "Beautiful handcrafted bangles from SriSamskruthi collection",
    image: "/images/bangles/gold-bangles-1.jpg",  // ← Local image path
    stock: 15,
    rating: 4.8,
    reviews: 24
  },
  {
    name: "Client's Silver Chain",
    category: "Chains",
    price: 3999,
    description: "Elegant silver chain necklace",
    image: "/images/chains/silver-chain-1.jpg",  // ← Local image path
    stock: 20,
    rating: 4.7,
    reviews: 18
  },
  // Add more products...
];
```

**Image URL format:** `/images/category/filename.jpg`

---

### Step 4: Run Seed Script to Add Products

```bash
# Go to backend folder
cd backend

# Make sure .env is set with MONGO_URI
# Then run:
node seed-products.js
```

Expected output:
```
✓ Connected to MongoDB
✓ Successfully added X products
=== ADDED PRODUCTS ===
1. Client's Gold Bangles (Bangles) - ₹5999
2. Client's Silver Chain (Chains) - ₹3999
...
✓ Database seeding completed successfully!
```

---

### Step 5: View Website

```bash
# Start frontend
cd frontend
npm run dev

# In another terminal, start backend
cd backend
npm run dev
```

Open: **http://localhost:5173**

You should see your client's images on the website!

---

## File Structure After Setup

```
website/
├── frontend/
│   └── public/
│       └── images/
│           ├── bangles/
│           │   ├── gold-bangles-1.jpg
│           │   └── gold-bangles-2.jpg
│           ├── chains/
│           │   ├── silver-chain-1.jpg
│           │   └── gold-chain-1.jpg
│           ├── rings/
│           │   ├── diamond-ring-1.jpg
│           │   └── pearl-ring-1.jpg
│           └── earrings/
│               ├── pearl-earrings-1.jpg
│               └── gold-earrings-1.jpg
└── backend/
    └── seed-products.js
```

---

## Example: Complete Product with Local Image

```javascript
{
  name: "Handcrafted Gold Bangles",
  category: "Bangles",
  price: 5999,
  description: "Beautiful traditional gold bangles handcrafted by skilled artisans",
  image: "/images/bangles/handcrafted-gold-bangles.jpg",  // Image from public folder
  stock: 10,
  rating: 4.9,
  reviews: 45
}
```

---

## Troubleshooting

### Images not showing?

**Check:**
1. Image file exists in `frontend/public/images/category/`
2. File name is correct (case-sensitive on some systems)
3. Use forward slashes `/` in image path, not backslashes
4. Restart frontend server after adding new images

### "Image not found" error?

**Solution:**
1. Verify file path is correct
2. Check file extension (.jpg, .png, etc.)
3. Make sure file is not corrupted
4. Try a different image to test

### How to add more products later?

**Easy way:**
1. Copy new images to appropriate folder
2. Edit `seed-products.js`
3. Add new product object
4. Run: `node seed-products.js` again

**Or via API:**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Product",
    "category": "Bangles",
    "price": 5999,
    "description": "Description here",
    "image": "/images/bangles/new-product.jpg",
    "stock": 10
  }'
```

---

## Image Best Practices

### Image Size
- **Width**: 400-600px (for product cards)
- **Height**: 400-600px (square or slightly taller)
- **File size**: Keep under 500KB per image
- **Format**: JPG, PNG, or WebP

### File Naming
- Use lowercase: `gold-bangles.jpg` (not `Gold Bangles.jpg`)
- Use hyphens: `gold-bangles.jpg` (not `gold_bangles.jpg`)
- Be descriptive: `pearl-earrings-gold-studs.jpg` (not `IMG_1234.jpg`)

### Image Quality
- Use good lighting
- Clear background
- Show product details
- All angles if possible

---

## Quick Command Reference

```bash
# Copy images from Pictures to project
copy C:\Users\yuvas\Pictures\photo\* frontend\public\images\bangles\

# Add products to database
cd backend
node seed-products.js

# Start frontend
cd frontend
npm run dev

# Start backend (in another terminal)
cd backend
npm run dev

# View website
# Open http://localhost:5173
```

---

## Next Steps

1. ✅ Create folder structure (already done!)
2. 📷 Copy images from `C:\Users\yuvas\Pictures\photo` to `frontend/public/images/`
3. 📝 Edit `backend/seed-products.js` with product details
4. ⚙️ Run `node seed-products.js`
5. 🌐 View website at `http://localhost:5173`
6. 🚀 Deploy to production

---

**Questions?** Check `IMAGE_SETUP.md` for more options (Cloudinary, S3, etc).
