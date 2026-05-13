const payload = {
  name: "Red Silk Thread Kundan Bangles",
  category: "Bangles",
  price: 1499,
  description: "Exquisite handcrafted red silk thread bangles adorned with beautiful kundan stone work. Perfect for weddings, festivals, and traditional occasions. Set of 3 bangles.",
  image: "/bangle-kundan-1.jpg",
  images: ["/bangle-kundan-1.jpg", "/bangle-kundan-2.jpg", "/bangle-kundan-3.jpg", "/bangle-kundan-4.jpg"],
  stock: 15
};

fetch('https://srisamskruthi-zj30.onrender.com/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => console.log('Result:', JSON.stringify(data, null, 2)))
.catch(err => console.error('Error:', err));
