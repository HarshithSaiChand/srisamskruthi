# SriSamskruthi - Complete Deployment & Client Management Guide

## DEPLOYMENT STRATEGY

### Backend Deployment (Render)
### Frontend Deployment (Vercel)

---

## STEP 1: Deploy Backend to Render

### Prerequisites:
1. GitHub account (free)
2. Render account (free, sign up at render.com)

### Setup:

1. **Push code to GitHub:**
   - Go to github.com and create new repo "srisamskruthi-backend"
   - Copy your backend folder to the repo
   - Push to GitHub

2. **Deploy on Render:**
   - Go to render.com and sign up
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select "srisamskruthi-backend" repo
   - Set environment variables:
     ```
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/srisamskruthi
     NODE_ENV=production
     ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app
     ```
   - Deploy!
   - Get your backend URL: `https://your-backend.onrender.com`

---

## STEP 2: Deploy Frontend to Vercel

### Prerequisites:
1. GitHub account
2. Vercel account (free, sign up at vercel.com)

### Setup:

1. **Push code to GitHub:**
   - Create new repo "srisamskruthi-frontend"
   - Push your frontend folder

2. **Deploy on Vercel:**
   - Go to vercel.com
   - Click "Add New..." → "Project"
   - Import your GitHub repo
   - Set environment variables:
     ```
     VITE_API_BASE_URL=https://your-backend.onrender.com/api
     VITE_RAZORPAY_KEY_ID=rzp_live_your_key_here
     ```
   - Click "Deploy"
   - Get your frontend URL: `https://srisamskruthi.vercel.app`

---

## STEP 3: Send to Client - Setup & Management

### What to Give Client:

1. **Website URL**: `https://srisamskruthi.vercel.app`
2. **Database Credentials** (in secure password manager like 1Password):
   - MongoDB Atlas username
   - MongoDB Atlas password
   - Cluster connection string

3. **Admin Instructions** (for managing products):

---

## HOW CLIENT CAN MANAGE PRODUCTS

### OPTION A: Edit & Re-Deploy (Recommended for now)

**For adding/editing products:**

1. **Edit product data:**
   - Open GitHub repo: `srisamskruthi-backend`
   - Go to `seed-products.js`
   - Click edit (pencil icon)
   - Update product details:
     ```javascript
     {
       name: "Product Name",
       category: "Necklace", // or Bangles, Chains, Rings, Earrings
       price: 1999,
       description: "Product description",
       image: "https://image-url.com/image.jpg",
       stock: 10,
       rating: 4.8,
       reviews: 5
     }
     ```
   - Commit changes
   - Render auto-deploys (takes 2-3 minutes)
   - Seeds data automatically

2. **Connect to MongoDB directly (Advanced):**
   - MongoDB Atlas dashboard
   - Database name: `srisamskruthi`
   - Collections: `products`, `orders`
   - Can view/edit data directly

### OPTION B: Admin Panel (Future Enhancement)

To be built: Admin dashboard at `/admin` where client can:
- Add/edit/delete products with image upload
- View orders
- Manage inventory
- No coding required

---

## CLIENT CREDENTIALS SHARING

### SECURE METHOD (Recommended):

1. **Use 1Password or Bitwarden:**
   - Create vault
   - Add credentials:
     - MongoDB Atlas login
     - GitHub repo access
     - Vercel dashboard access
     - Razorpay account
   - Share vault link with client
   - Client creates their own password

2. **What NOT to do:**
   - ❌ Don't email passwords
   - ❌ Don't use Google Drive/Dropbox
   - ❌ Don't share plain text

---

## FULL CREDENTIALS PACKAGE

Create a document with:

```
=== SRISAMSKRUTHI - CLIENT MANAGEMENT PACKAGE ===

LIVE WEBSITE:
- URL: https://srisamskruthi.vercel.app

BACKEND:
- URL: https://your-backend.onrender.com
- Status: Check at Render dashboard

DATABASE (MongoDB):
- Platform: MongoDB Atlas (cloud.mongodb.com)
- Database: srisamskruthi
- Cluster: cluster0

GITHUB REPOSITORIES:
- Backend: https://github.com/yourname/srisamskruthi-backend
- Frontend: https://github.com/yourname/srisamskruthi-frontend

DEPLOYMENT PLATFORMS:
- Frontend: Vercel (vercel.com)
- Backend: Render (render.com)

PAYMENT GATEWAY:
- Razorpay (razorpay.com)
- Key ID: [in secure vault]

DOMAIN (Optional):
- Register at: godaddy.com / namecheap.com
- Point DNS to Vercel nameservers

SUPPORT PROCESS:
1. Email: your-email@example.com
2. Response time: 24-48 hours
3. For urgent issues: Call [phone number]
```

---

## STEP-BY-STEP: HOW CLIENT ADDS PRODUCTS

### Via GitHub (Current Method):

1. Go to GitHub repo → `backend/seed-products.js`
2. Click ✏️ to edit
3. Add new product in `sampleProducts` array:
   ```javascript
   {
     name: "Handmade Bangles",
     category: "Bangles",
     price: 2999,
     description: "Beautiful handcrafted bangles",
     image: "https://example.com/image.jpg",
     stock: 20,
     rating: 4.9,
     reviews: 10
   }
   ```
4. Scroll to bottom → "Commit changes"
5. Add message: "Add new handmade bangles product"
6. Click "Commit"
7. **Render auto-deploys** (2-3 min)
8. Check website - new product appears!

---

## WORKFLOW FOR CLIENT UPDATES

```
Client wants to add/edit product
    ↓
Edit seed-products.js on GitHub
    ↓
Commit changes
    ↓
Render auto-deploys backend
    ↓
Products update in database
    ↓
Website shows new/updated products (automatic!)
```

---

## RAZORPAY SETUP FOR CLIENT

1. **Client creates Razorpay account:**
   - Go to razorpay.com
   - Sign up (provide business details)
   - Complete KYC verification

2. **Get API Keys:**
   - Dashboard → Settings → API Keys
   - Copy Test Key ID and Test Secret Key
   - Later use Live Keys for production

3. **Update .env:**
   - Render dashboard → Environment variables
   - Add: `VITE_RAZORPAY_KEY_ID=rzp_live_xxxxx`
   - Deploy

---

## TROUBLESHOOTING FOR CLIENT

### Products Not Showing:
- Wait 2-3 minutes after commit (Render is deploying)
- Refresh browser (Ctrl+Shift+R)
- Check Render deployment logs

### Payment Not Working:
- Verify Razorpay account is active
- Check API key in environment variables
- Test with test key first

### Website Slow:
- Check Render status (might be on free tier sleeping)
- Upgrade to paid plan if needed

---

## MONTHLY COSTS (Estimate)

| Service | Free | Paid |
|---------|------|------|
| Render (Backend) | $0 (sleeps after 15min) | $7/month |
| Vercel (Frontend) | $0 | $20/month |
| MongoDB (Database) | $0 (512MB) | $57/month |
| Razorpay | 0% + ₹5/transaction | - |
| Domain (Optional) | - | $10-15/year |
| **TOTAL** | **$0** | **~$85/month** |

Recommended: Start with free tier, upgrade if needed.

---

## NEXT STEPS FOR CLIENT

1. ✅ Receive website URL
2. ✅ Test website
3. ✅ Receive credentials in 1Password
4. ✅ Upgrade payment method (card)
5. ✅ Configure Razorpay live keys
6. ✅ Start taking orders!

---

## SUPPORT CONTACT

For issues or questions:
- Email: [your-email]
- Phone: [phone]
- WhatsApp: [number]
- Response: Within 24 hours

---

**Website Status: LIVE ✅**
**Ready for Client: YES ✅**
**Deployment: COMPLETE ✅**
