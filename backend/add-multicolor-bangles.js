fetch('https://srisamskruthi-zj30.onrender.com/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Multicolor Crystal Glass Bangles Set",
    category: "Bangles",
    price: 899,
    description: "Vibrant set of multicolor crystal glass bangles featuring an elegant textured cut design with gold-dotted accents. Includes pink, green, yellow, and clear shades, perfect for festive wear and matching with varied outfits.",
    image: "/multicolor-crystal-bangles-2.jpg",
    stock: 15
  })
})
.then(res => res.json())
.then(data => {
  console.log('Created:', data.data.name, '- ID:', data.data._id);
  return fetch(`https://srisamskruthi-zj30.onrender.com/api/product/${data.data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: [
        "/multicolor-crystal-bangles-1.jpg", 
        "/multicolor-crystal-bangles-2.jpg", 
        "/multicolor-crystal-bangles-3.jpg", 
        "/multicolor-crystal-bangles-4.jpg", 
        "/multicolor-crystal-bangles-5.jpg"
      ]
    })
  });
})
.then(res => res.json())
.then(data => console.log('Done! Images attached:', data.data.images))
.catch(err => console.error('Error:', err));
