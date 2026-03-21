const http = require('https');

async function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => responseBody += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(responseBody));
        } catch (e) {
          resolve({ success: false, error: 'Failed to parse JSON' });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function cleanProducts() {
  const baseUrl = 'srisamskruthi-zj30.onrender.com';
  
  // 1. Get all products
  console.log('Fetching all products...');
  const getOptions = {
    hostname: baseUrl,
    path: '/api/products',
    method: 'GET'
  };
  
  const result = await makeRequest(getOptions);
  if (!result.success) {
    console.error('Failed to fetch products');
    return;
  }

  const allProducts = result.data;
  console.log(`Found ${allProducts.length} products total.`);

  // 2. Identify products to delete
  // We want to delete products that:
  // - Have placeholder images (like /logo.jpg or starting with http)
  // - Are NOT the ones we specifically added (/products/custom_...)
  
  const productsToDelete = allProducts.filter(p => !p.image.startsWith('/products/custom_'));

  console.log(`Identified ${productsToDelete.length} placeholder products to delete.`);

  // 3. Delete them one by one
  for (const product of productsToDelete) {
    console.log(`Deleting ${product.name} (ID: ${product._id})...`);
    const deleteOptions = {
      hostname: baseUrl,
      path: `/api/product/${product._id}`,
      method: 'DELETE'
    };
    
    const delResult = await makeRequest(deleteOptions);
    if (delResult.success) {
      console.log(`Successfully deleted ${product.name}`);
    } else {
      console.log(`Failed to delete ${product.name}: ${delResult.message}`);
    }
  }

  console.log('Cleanup complete!');
}

cleanProducts().catch(console.error);
