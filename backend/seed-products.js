require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

// Sample products with Cloudinary image URLs
// Replace with actual URLs from your client's images
const sampleProducts = [
  {
    name: "Handmade Beaded Bangles",
    category: "Bangles",
    price: 1499,
    description: "Beautiful handcrafted beaded bangles with traditional patterns. Each piece is unique and handmade with care.",
    image: "https://via.placeholder.com/400x400?text=Beaded+Bangles",
    stock: 15,
    rating: 4.8,
    reviews: 24
  },
  {
    name: "Artisan Cord Chain",
    category: "Chains",
    price: 1999,
    description: "Elegant handmade cord chain crafted by skilled artisans. Perfect for everyday wear and special occasions.",
    image: "https://via.placeholder.com/400x400?text=Cord+Chain",
    stock: 20,
    rating: 4.7,
    reviews: 18
  },
  {
    name: "Handcrafted Stone Ring",
    category: "Rings",
    price: 2499,
    description: "Stunning handmade ring with natural stone elements. A timeless piece of traditional artistry.",
    image: "https://via.placeholder.com/400x400?text=Stone+Ring",
    stock: 8,
    rating: 4.9,
    reviews: 32
  },
  {
    name: "Traditional Bead Earrings",
    category: "Earrings",
    price: 999,
    description: "Classic handmade bead earrings with traditional design. Simple yet elegant for any occasion.",
    image: "https://via.placeholder.com/400x400?text=Bead+Earrings",
    stock: 25,
    rating: 4.6,
    reviews: 15
  },
  {
    name: "Artisan Pendant Necklace",
    category: "Necklace",
    price: 1899,
    description: "Elegant handmade pendant necklace with traditional craftsmanship. Perfect gift for loved ones.",
    image: "https://via.placeholder.com/400x400?text=Pendant+Necklace",
    stock: 18,
    rating: 4.9,
    reviews: 28
  }
];

async function seedProducts() {
  try {
    // Connect to MongoDB
    if (!process.env.MONGO_URI) {
      console.error('❌ MONGO_URI not set in .env file');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('✓ Connected to MongoDB');

    // Clear existing products (optional - comment out if you want to keep existing)
    // await Product.deleteMany({});
    // console.log('✓ Cleared existing products');

    // Insert sample products
    const result = await Product.insertMany(sampleProducts);
    console.log(`✓ Successfully added ${result.length} products`);

    // Display added products
    console.log('\n=== ADDED PRODUCTS ===');
    result.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} (${product.category}) - ₹${product.price}`);
    });

    console.log('\n✓ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:');
    console.error('  Message:', error.message);
    if (error.stack) console.error('  Stack:', error.stack);
    process.exit(1);
  }
}

// Run the seed function
seedProducts();
