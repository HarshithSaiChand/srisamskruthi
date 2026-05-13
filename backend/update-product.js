const payload = {
  image: "/lipstick-1.jpg",
  images: ["/lipstick-1.jpg", "/lipstick-2.jpg"]
};

fetch('https://srisamskruthi-zj30.onrender.com/api/product/6a04062285b44ee2eef0623b', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => console.log('Result:', data))
.catch(err => console.error('Error:', err));
