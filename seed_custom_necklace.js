const http = require('https');

const products = [
  {
    name: "Premium Diamond & Pink Stone Necklace Set",
    category: "Necklace",
    price: 5999,
    description: "An exquisite necklace and earring set featuring brilliant diamond-like stones and elegant pink teardrop centerpieces. Perfect for weddings and special occasions.",
    image: "/products/custom_necklace_1.jpg",
    stock: 5,
    rating: 5.0,
    reviews: 2
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
