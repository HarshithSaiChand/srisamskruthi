const payload = {
  name: "Kiss Love Matte Lips",
  category: "Makeup",
  price: 999,
  description: "Vibrant and long-lasting pink matte lipstick for a bold look.",
  image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500",
  stock: 20
};

fetch('https://srisamskruthi-zj30.onrender.com/api/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => console.log('Result:', data))
.catch(err => console.error('Error:', err));
