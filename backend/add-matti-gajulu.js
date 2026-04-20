require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const newProduct = {
    name: "Matti gajulu",
    category: "Bangles",
    price: 299,
    description: "Beautiful traditional Matti gajulu featuring intricate craftsmanship and stunning red stone embellishments. Perfect for daily wear or special occasions.",
    image: "/images/products/matti-gajulu-1.jpg",
    stock: 50,
    rating: 4.9,
    reviews: 15
};

async function addProduct() {
  try {
    if (!process.env.MONGO_URI) {
      console.error('MONGO_URI not set');
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    const result = await Product.create(newProduct);
    console.log('Successfully added product:', result.name);
    process.exit(0);
  } catch (error) {
    console.error('Error adding product:', error);
    process.exit(1);
  }
}

addProduct();
