fetch('https://srisamskruthi-zj30.onrender.com/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Silver Blue Sapphire Necklace Set",
    category: "Chains",
    price: 2499,
    description: "Stunning silver-finish necklace set with blue sapphire stones and matching drop earrings. Features intricate circular CZ diamond detailing with elegant blue gem accents. Complete set includes necklace and earrings.",
    image: "/sapphire-necklace-2.jpg",
    stock: 8
  })
})
.then(res => res.json())
.then(data => {
  console.log('Created:', data.data.name, '- ID:', data.data._id);
  return fetch(`https://srisamskruthi-zj30.onrender.com/api/product/${data.data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      images: ["/sapphire-necklace-1.jpg", "/sapphire-necklace-2.jpg", "/sapphire-necklace-3.jpg", "/sapphire-necklace-4.jpg", "/sapphire-necklace-5.jpg"]
    })
  });
})
.then(res => res.json())
.then(data => console.log('Done! Images attached:', data.data.images))
.catch(err => console.error('Error:', err));
