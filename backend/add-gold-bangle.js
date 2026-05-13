// Step 1: Create product
fetch('https://srisamskruthi-zj30.onrender.com/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Gold Textured Beaded Bangles",
    category: "Bangles",
    price: 1299,
    description: "Stunning set of 4 gold-finish textured beaded bangles with intricate dot pattern work. Lightweight yet elegant, perfect for daily wear and festive occasions.",
    image: "/bangle-gold-1.jpg",
    stock: 20
  })
})
.then(res => res.json())
.then(data => {
  console.log('Created:', data.data.name, '- ID:', data.data._id);
  // Step 2: Update with all images
  return fetch(`https://srisamskruthi-zj30.onrender.com/api/product/${data.data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: ["/bangle-gold-1.jpg", "/bangle-gold-2.jpg", "/bangle-gold-3.jpg"]
    })
  });
})
.then(res => res.json())
.then(data => console.log('Updated with images:', JSON.stringify(data, null, 2)))
.catch(err => console.error('Error:', err));
