const axios = require('axios');

const API_BASE_URL = 'https://srisamskruthi-zj30.onrender.com/api';

const products = [
  {
    name: 'Traditional Gold Finish Hip Belt',
    category: 'Hip Belt',
    price: 4999,
    description: 'An elegant gold-finished hip belt with intricate traditional carvings.',
    image: 'https://images.unsplash.com/photo-1611085510577-0a219a169434?q=80&w=1000&auto=format&fit=crop', // Placeholder for now
    stock: 5,
    rating: 4.8,
    reviews: 12
  },
  {
    name: 'Antique Peacock Design Hip Belt',
    category: 'Hip Belt',
    price: 5499,
    description: 'A stunning antique hip belt featuring a beautiful peacock motif.',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop', // Placeholder for now
    stock: 3,
    rating: 4.9,
    reviews: 8
  },
  {
    name: 'Premium Stone Studded Hair Veni',
    category: 'Hair Accessories',
    price: 1299,
    description: 'A premium hair veni studded with sparkling stones for a grand look.',
    image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=1000&auto=format&fit=crop', // Placeholder for now
    stock: 10,
    rating: 4.7,
    reviews: 15
  },
  {
    name: 'Traditional Hair Pins Set (6pcs)',
    category: 'Hair Accessories',
    price: 799,
    description: 'A set of 6 traditional hair pins with beautiful floral designs.',
    image: 'https://images.unsplash.com/photo-1617346141381-817ab32f3f9f?q=80&w=1000&auto=format&fit=crop', // Placeholder for now
    stock: 20,
    rating: 4.5,
    reviews: 25
  }
];

const seedProducts = async () => {
  for (const product of products) {
    try {
      const response = await axios.post(`${API_BASE_URL}/products`, product);
      console.log(`Added: ${product.name}`);
    } catch (error) {
      console.error(`Error adding ${product.name}:`, error.response ? error.response.data : error.message);
    }
  }
};

seedProducts();
