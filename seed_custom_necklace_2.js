const http = require('https');

const products = [
  {
    name: "Elegant Pearl & Multicolor Stone Choker Set",
    category: "Necklace",
    price: 3999,
    description: "A stunning three-layered pearl choker necklace featuring a brilliant multicolor stone centerpiece. This set includes matching statement earrings, perfect for adding a touch of elegance to any traditional outfit.",
    image: "/products/custom_necklace_2.jpg",
    stock: 3,
    rating: 4.8,
    reviews: 5
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
