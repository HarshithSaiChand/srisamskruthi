require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const addLipstick = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    const lipstick = {
      name: "Kiss Love Matte Lips",
      category: "Makeup",
      price: 999,
      description: "Vibrant and long-lasting pink matte lipstick for a bold look.",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500",
      images: [],
      stock: 20,
      rating: 4.8,
      reviews: 15
    };

    // Check if it already exists
    const existing = await Product.findOne({ name: lipstick.name });
    if (!existing) {
      await Product.create(lipstick);
      console.log('Successfully added lipstick product!');
    } else {
      console.log('Product already exists in the database.');
    }

    mongoose.connection.close();
  } catch (error) {
    console.error('Failed to add product:', error);
    mongoose.connection.close();
    process.exit(1);
  }
};

addLipstick();
