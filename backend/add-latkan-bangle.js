fetch('https://srisamskruthi-zj30.onrender.com/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Gold Stone Latkan Bangles",
    category: "Bangles",
    price: 1799,
    description: "Elegant gold-finish bangles encrusted with sparkling stones and adorned with beautiful hanging latkan ball chains. A showstopper piece for weddings and special occasions. Set of 2 bangles.",
    image: "/bangle-latkan-1.jpg",
    stock: 10
  })
})
.then(res => res.json())
.then(data => {
  console.log('Created:', data.data.name, '- ID:', data.data._id);
  return fetch(`https://srisamskruthi-zj30.onrender.com/api/product/${data.data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: ["/bangle-latkan-1.jpg", "/bangle-latkan-2.jpg", "/bangle-latkan-3.jpg"]
    })
  });
})
.then(res => res.json())
.then(data => console.log('Done! Images attached:', data.data.images))
.catch(err => console.error('Error:', err));
