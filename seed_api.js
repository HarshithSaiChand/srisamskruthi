const http = require('https');

const products = [
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
  }
];

async function seed() {
  for (const product of products) {
    const data = JSON.stringify(product);
    const options = {
      hostname: 'srisamskruthi-zj30.onrender.com',
      path: '/api/products',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    await new Promise((resolve) => {
      const req = http.request(options, (res) => {
        let responseData = '';
        res.on('data', chunk => responseData += chunk);
        res.on('end', () => {
          console.log(`Added ${product.name}: ${res.statusCode}`);
          resolve();
        });
      });
      req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
        resolve();
      });
      req.write(data);
      req.end();
    });
  }
}

seed();
