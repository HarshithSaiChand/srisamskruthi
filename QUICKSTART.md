# 🚀 Quick Start Guide - SriSamskruthi

## Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

## ⚡ Quick Setup (2 minutes)

### Windows Users
1. **Double-click** `install.bat` to install dependencies
2. **Open** `backend/.env` and set your MongoDB URI
3. **Double-click** `start-backend.bat` (opens in new window)
4. **Double-click** `start-frontend.bat` (opens in new window)
5. **Open** http://localhost:5173 in your browser

### Mac/Linux Users
1. **Run** `chmod +x install.sh && ./install.sh`
2. **Edit** `backend/.env` with your MongoDB URI
3. **Run** `./start-backend.sh` (in one terminal)
4. **Run** `./start-frontend.sh` (in another terminal)
5. **Open** http://localhost:5173 in your browser

---

## 📋 Step-by-Step Setup

### Step 1: Install Dependencies

**Windows:**
```bash
install.bat
```

**Mac/Linux:**
```bash
chmod +x install.sh && ./install.sh
```

Or manually:
```bash
# Backend
cd backend
npm install

# Frontend (in another terminal)
cd frontend
npm install
```

### Step 2: Configure Backend

1. Go to `backend/` folder
2. Create `.env` file from `.env.example`
3. Add your MongoDB connection string:
   ```
   MONGO_URI=mongodb://localhost:27017/srisamskruthi
   PORT=5000
   NODE_ENV=development
   ```

### Step 3: Start Backend Server

**Windows:**
```bash
start-backend.bat
```

**Mac/Linux:**
```bash
./start-backend.sh
```

Or manually:
```bash
cd backend
npm run dev
```

✓ Backend runs at: `http://localhost:5000`

### Step 4: Start Frontend Server

**Windows:**
```bash
start-frontend.bat
```

**Mac/Linux:**
```bash
./start-frontend.sh
```

Or manually:
```bash
cd frontend
npm run dev
```

✓ Frontend runs at: `http://localhost:5173`

### Step 5: Open in Browser

Visit: **http://localhost:5173**

---

## 🧪 Test the Application

### 1. Add Sample Products

Use any API testing tool (Postman, cURL, VS Code REST Client) or create products through the admin panel.

**Example cURL command:**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gold Bangles",
    "category": "Bangles",
    "price": 5000,
    "description": "Beautiful handcrafted gold bangles with traditional design",
    "image": "https://via.placeholder.com/400x400?text=Gold+Bangles",
    "stock": 10
  }'
```

### 2. Test Shopping Flow

1. Go to **Home** page
2. Click **Shop Now** or go to **Products**
3. Browse products or filter by category
4. Click **View Details** on any product
5. Adjust quantity and click **Add to Cart**
6. Go to **Cart**
7. Review items and proceed to **Checkout**
8. Fill in customer details and place order

### 3. Check Backend Health

Visit: `http://localhost:5000/api/health`

Should return:
```json
{
  "success": true,
  "message": "SriSamskruthi API is running",
  "timestamp": "2024-12-26T10:30:00.000Z"
}
```

---

## 📁 Project Structure

```
website/
├── backend/               # Node.js + Express
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Custom middleware
│   ├── server.js         # Main server
│   └── package.json
│
├── frontend/             # React + Vite
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Cart Context
│   │   ├── utils/       # API utilities
│   │   └── main.jsx     # Entry point
│   ├── package.json
│   └── index.html
│
├── README.md             # Full documentation
├── install.bat / .sh     # Dependency installation
├── start-backend.bat / .sh
└── start-frontend.bat / .sh
```

---

## 🎨 Features

✅ Responsive design (mobile, tablet, desktop)  
✅ Product browsing with filtering  
✅ Shopping cart with quantity management  
✅ Checkout form with address validation  
✅ Order creation API  
✅ Elegant UI with traditional Indian theme  
✅ State management with React Context  
✅ RESTful API with error handling  

---

## 🔧 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally OR use MongoDB Atlas cloud database
- Check MONGO_URI in `backend/.env`
- Example local URI: `mongodb://localhost:27017/srisamskruthi`

### Port Already in Use
- **Backend port 5000** in use:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  
  # Mac/Linux
  lsof -i :5000
  ```
  Then change PORT in `backend/.env`

### Dependencies Issue
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Images Not Loading
- Check image URLs are valid
- Use placeholder images: `https://via.placeholder.com/400x400?text=Product`

---

## 📚 API Documentation

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/category/:category` | Get by category |
| GET | `/api/product/:id` | Get single product |
| POST | `/api/products` | Add product (Admin) |
| PUT | `/api/product/:id` | Update product |
| DELETE | `/api/product/:id` | Delete product |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create order |
| GET | `/api/orders` | Get all orders |
| GET | `/api/order/:id` | Get single order |
| PUT | `/api/order/:id` | Update order |
| DELETE | `/api/order/:id` | Delete order |

---

## 🚀 Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
# Creates 'dist' folder for deployment
```

### Deploy Checklist
- [ ] Set proper environment variables
- [ ] Configure MongoDB Atlas or production database
- [ ] Set NODE_ENV=production
- [ ] Configure CORS for production domains
- [ ] Set up SSL/HTTPS
- [ ] Configure payment gateway (Razorpay)
- [ ] Set up email notifications
- [ ] Enable logging and monitoring

---

## 💡 Next Steps

1. **Add more products** via API
2. **Customize colors** in `tailwind.config.js`
3. **Integrate Razorpay** in Checkout page
4. **Add authentication** for user accounts
5. **Deploy** to production

---

## 📞 Support

- Email: info@srisamskruthi.com
- Need help? Check `README.md` for detailed documentation

---

**Happy Coding! ✨** 

Built with ❤️ for SriSamskruthi - Handcrafted Traditional Jewellery
