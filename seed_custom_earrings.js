const http = require('https');

const products = [
  {
    name: "Geometric Gold Finish Dangle Earrings",
    category: "Earrings",
    price: 1499,
    description: "Elegant gold-finished dangle earrings featuring a modern, intricate geometric circular design. Perfect for both everyday wear and special occasions.",
    image: "/products/custom_earrings_1.jpg",
    stock: 12,
    rating: 4.9,
    reviews: 8
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
