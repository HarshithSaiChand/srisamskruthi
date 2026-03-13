# SriSamskruthi - Handcrafted Traditional Jewellery E-Commerce Platform

A complete, production-ready full-stack MERN e-commerce website for selling handmade jewellery with elegant Indian traditional branding.

## 🎨 Features

### Frontend
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern UI**: Elegant gold, maroon, and ivory color scheme
- **Shopping Experience**:
  - Browse products by category (Bangles, Chains, Rings, Earrings)
  - Advanced product filtering (category, price range)
  - Product details with images and ratings
  - Shopping cart with quantity management
  - Secure checkout process
- **State Management**: React Context API for cart management
- **Performance**: Built with Vite for fast development and production builds

### Backend
- **RESTful API**: Complete CRUD operations for products and orders
- **Database**: MongoDB with Mongoose ODM
- **Security**: CORS enabled, input validation
- **Payment Ready**: Razorpay integration placeholder

### Product Categories
- **Bangles**: Elegant traditional bangles with intricate designs
- **Chains**: Beautiful gold and silver chains
- **Rings**: Stunning rings with precious stones
- **Earrings**: Exquisite earrings for elegant styling

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern UI library with hooks
- **Vite**: Next-generation build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls

### Backend
- **Node.js & Express**: Server and API framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management

## 📁 Project Structure

```
website/
├── frontend/                 # React Vite application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context (Cart)
│   │   ├── utils/          # API calls and utilities
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Tailwind CSS imports
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
│
└── backend/                 # Node.js Express server
    ├── models/             # Mongoose schemas
    │   ├── Product.js      # Product model
    │   └── Order.js        # Order model
    ├── routes/             # API routes
    │   ├── products.js     # Product endpoints
    │   └── orders.js       # Order endpoints
    ├── middleware/         # Custom middleware
    │   └── cors.js         # CORS configuration
    ├── server.js           # Main server file
    ├── package.json        # Dependencies
    └── .env.example        # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

#### 1. Clone/Download the project

```bash
cd website
```

#### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your MongoDB URI
# MONGO_URI=mongodb://localhost:27017/srisamskruthi
# PORT=5000
# NODE_ENV=development

# Start backend server
npm run dev
# or
npm start
```

The backend will run on `http://localhost:5000`

#### 3. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Create .env file (optional - uses default values)
cp .env.example .env

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/category/:category` - Get products by category
- `GET /api/product/:id` - Get single product
- `POST /api/products` - Add new product (Admin)
- `PUT /api/product/:id` - Update product (Admin)
- `DELETE /api/product/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders
- `GET /api/order/:id` - Get single order
- `PUT /api/order/:id` - Update order status
- `DELETE /api/order/:id` - Delete order

### Health Check
- `GET /api/health` - Server health check

## 🛍️ Features Walkthrough

### Home Page
- Hero section with brand message
- Product categories showcase
- Featured products display
- About section
- Contact information

### Products Page
- Category filtering (Bangles, Chains, Rings, Earrings)
- Price range filtering
- Product cards with images, ratings, and prices
- Quick "Add to Cart" and "View Details" buttons
- Responsive grid layout

### Product Details Page
- Full product image
- Detailed description
- Rating and review count
- Stock information
- Quantity selector
- Add to cart functionality
- Related product information
- Customer benefits section

### Cart Page
- View all cart items
- Update quantities
- Remove items
- Cart total calculation
- Shipping cost estimation
- Tax calculation (18%)
- Order summary sidebar
- Proceed to checkout button

### Checkout Page
- Customer information form
- Delivery address form
- Order review
- Final order summary
- Order placement with payment gateway placeholder

## 🎨 Color Scheme

- **Primary Gold**: `#D4AF37` - Premium, elegant
- **Primary Maroon**: `#6B1D22` - Traditional, sophisticated
- **Ivory**: `#FFFFF0` - Clean, premium feel
- **Deep Gold**: `#B8860B` - Accent color

## 💳 Payment Integration

The checkout page includes a Razorpay payment placeholder. To integrate actual Razorpay:

1. Sign up at [Razorpay](https://razorpay.com)
2. Get your API keys
3. Install Razorpay React library: `npm install razorpay`
4. Add Razorpay integration in the Checkout component

## 📊 Database Schema

### Product Model
```javascript
{
  name: String,
  category: String (Bangles|Chains|Rings|Earrings),
  price: Number,
  description: String,
  image: String (URL),
  stock: Number,
  rating: Number,
  reviews: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Model
```javascript
{
  products: [{
    productId: ObjectId,
    name: String,
    price: Number,
    quantity: Number
  }],
  totalAmount: Number,
  customer: {
    name: String,
    email: String,
    phone: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipcode: String
    }
  },
  paymentStatus: String (pending|completed|failed),
  paymentMethod: String (razorpay|upi|netbanking|creditcard),
  orderStatus: String (pending|confirmed|shipped|delivered|cancelled),
  razorpayOrderId: String,
  razorpayPaymentId: String,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing the Application

### Add Sample Products
You can add sample products via the API:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gold Bangles",
    "category": "Bangles",
    "price": 5000,
    "description": "Beautiful traditional gold bangles",
    "image": "https://via.placeholder.com/400x400?text=Gold+Bangles",
    "stock": 10
  }'
```

### Shopping Flow
1. Visit `http://localhost:5173`
2. Browse products or filter by category
3. Click "View Details" or "Add to Cart"
4. View cart and update quantities
5. Proceed to checkout
6. Fill in customer and delivery information
7. Review order and place order

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- Input validation on both frontend and backend
- CORS enabled for secure cross-origin requests
- Environment variables for sensitive data
- Error handling and messages
- Form validation before submission

## 📈 Performance

- **Frontend**: Optimized with Vite, lazy loading, and code splitting
- **Backend**: Efficient MongoDB queries with proper indexing
- **Images**: Using placeholder URLs (replace with CDN in production)
- **Caching**: Can be added with Redis for scalability

## 🚀 Deployment

### Backend (Render / Railway)

- Ensure `backend/.env` is populated with the following variables:
  - `MONGO_URI` — your MongoDB Atlas connection string
  - `PORT` — (optional) port to listen on; Render/Railway provide one automatically
  - `NODE_ENV=production`
  - `ALLOWED_ORIGINS` — comma-separated origins allowed for CORS (e.g. `https://your-site.com`)

- Recommended `package.json` scripts (already present):
  - `start`: `node server.js` (used by Render)
  - `dev`: `nodemon server.js`

- Render: Create a new Web Service, connect your repo, set build command `npm install`, start command `npm start` in the `backend` directory, and add environment variables in the Render dashboard.
- Railway: Create a new project, link repo, and add the environment variables in the Railway UI. Railway auto-detects Node apps.

### Frontend (Vercel / Netlify)

- Ensure the frontend environment variable `VITE_API_BASE_URL` is set in the deployment platform to your backend API base (example: `https://api.your-domain.com/api`). If your frontend and backend are served from the same origin, set this to `/api` or leave blank (the code falls back to relative `/api`).

- Netlify:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Add `VITE_API_BASE_URL` under Site settings → Build & deploy → Environment.
  - `_redirects` file is included in `frontend/public` to support SPA routing.

- Vercel:
  - Connect the repository and set the project root to `frontend`.
  - Set `VITE_API_BASE_URL` in Project Settings → Environment Variables.

### Additional Notes

- Do NOT commit secrets to Git. Use the platform's environment variable settings.
- For production, enable HTTPS and configure proper CORS by setting `ALLOWED_ORIGINS`.
- Monitor logs in the hosting platform to verify MongoDB connectivity and server health.


### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy the dist/ folder
```

### Backend Deployment (Heroku/Railway/Render)
```bash
# Set environment variables on hosting platform
# Push to git and deploy
npm start
```

## 📝 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/srisamskruthi
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_BASE_URL=https://your-backend.example.com/api
```

## 🐛 Troubleshooting

### Backend not connecting to MongoDB
- Ensure MongoDB is running
- Check MONGO_URI in .env file
- Verify MongoDB connection string format

### CORS errors
- Ensure backend CORS middleware is enabled
- Check that frontend URL matches CORS allowed origins

### Port already in use
- Change PORT in backend .env
- Change port in frontend vite.config.js

### Images not loading
- Use valid image URLs
- Check image URL format and accessibility

## 📞 Support

For issues, questions, or feature requests:
- Email: info@srisamskruthi.com
- Phone: +91 98765 43210

## 📄 License

This project is open-source and ready for production use.

## 🎯 Future Enhancements

- [ ] User authentication and accounts
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Real Razorpay integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Order tracking
- [ ] Advanced search functionality
- [ ] Personalized recommendations
- [ ] Multiple payment methods

---

**Built with ❤️ for SriSamskruthi**

*Handcrafted Traditional Jewellery* ✨
