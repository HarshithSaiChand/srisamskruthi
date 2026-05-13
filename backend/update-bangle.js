const payload = {
  images: ["/bangle-kundan-1.jpg", "/bangle-kundan-2.jpg", "/bangle-kundan-3.jpg", "/bangle-kundan-4.jpg"]
};

fetch('https://srisamskruthi-zj30.onrender.com/api/product/6a04822b9fc717d0e25af758', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => console.log('Result:', JSON.stringify(data, null, 2)))
.catch(err => console.error('Error:', err));
