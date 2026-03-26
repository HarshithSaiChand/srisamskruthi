import React, { useEffect, useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { productAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    {
      name: 'Necklace',
      icon: <img src="/necklace-icon.png" alt="Necklace" className="w-12 h-12 mx-auto" />,
      description: 'Elegant handmade necklaces for every occasion',
      productCount: 0
    },
    {
      name: 'Bangles',
      icon: <img src="/bangles-icon.png" alt="Bangles" className="w-12 h-12 mx-auto" />,
      description: 'Stunning bangles with traditional craftsmanship',
      productCount: 0
    },
    {
      name: 'Chains',
      icon: <img src="https://cdn-icons-png.flaticon.com/128/7466/7466570.png" alt="Chains" className="w-12 h-12 mx-auto" />,
      description: 'Beautiful chains crafted with precision',
      productCount: 0
    },
    {
      name: 'Rings',
      icon: <img src="/ring-icon.png" alt="Rings" className="w-12 h-12 mx-auto" />,
      description: 'Exquisite rings for special moments',
      productCount: 0
    },
    {
      name: 'Earrings',
      icon: <img src="/earrings-icon.png" alt="Earrings" className="w-12 h-12 mx-auto" />,
      description: 'Delicate earrings with artistic designs',
      productCount: 0
    },
    {
      name: 'Hip Belt',
      icon: <img src="/hipbelt-icon.png" alt="Hip Belt" className="w-12 h-12 mx-auto" />,
      description: 'Elegant hip belts for a traditional look',
      productCount: 0
    },
    {
      name: 'Hair Accessories',
      icon: '🌸',
      description: 'Beautiful hair accessories for every style',
      productCount: 0
    }
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productAPI.getAllProducts();
        if (response.success) {
          const allProducts = response.data;
          
          // Get featured products (first 2)
          setFeaturedProducts(allProducts.slice(0, 2));

          // Calculate counts for each category
          setCategories(prevCategories => 
            prevCategories.map(cat => ({
              ...cat,
              productCount: allProducts.filter(p => p.category === cat.name).length
            }))
          );
        }
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Error Message */}
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon to-deepGold text-ivory py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              SriSamskruthi
            </h1>
            <p className="text-2xl md:text-3xl text-gold mb-6">
              Handcrafted Traditional Jewellery
            </p>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover the timeless beauty of authentic Indian jewellery,
              handcrafted with precision and love. Each piece tells a story of tradition and elegance.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="bg-gold text-maroon px-8 py-3 rounded-lg font-bold text-lg hover:bg-ivory transition duration-300"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-maroon text-center mb-12">
            Our Collections
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <div key={category.name} className="w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.5rem)] max-w-[280px]">
                <CategoryCard
                  category={category.name}
                  icon={category.icon}
                  description={category.description}
                  productCount={category.productCount}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-maroon text-center mb-12">
            Featured Products
          </h2>

          {loading ? (
            <LoadingSpinner />
          ) : featuredProducts.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8">
              {featuredProducts.map((product) => (
                <div key={product._id} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm">
                  <ProductCard
                    product={product}
                    onViewDetails={() => navigate(`/product/${product._id}`)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No products available yet. Check back soon!
            </p>
          )}

          {featuredProducts.length > 0 && (
            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/products')}
                className="bg-gold text-maroon px-8 py-3 rounded-lg font-bold text-lg hover:bg-deepGold transition duration-300"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-maroon to-deepGold text-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gold mb-6">About SriSamskruthi</h2>
              <p className="text-lg opacity-90 mb-4">
                SriSamskruthi is dedicated to preserving and promoting traditional Indian jewellery.
                Each piece is handcrafted by skilled artisans using authentic techniques passed down through generations.
              </p>
              <p className="text-lg opacity-90 mb-4">
                We believe in quality, authenticity, and sustainability.
                Our jewellery is not just an accessory; it's a celebration of our rich cultural heritage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>100% Authentic Handcrafted</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Premium Quality Materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Certified by Artisans</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Lifetime Customer Support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gold bg-opacity-20 rounded-lg p-8 flex items-center justify-center h-64">
              <span className="text-9xl">💎</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-maroon text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-maroon mb-2">Address</h3>
              <p className="text-gray-600">
                SriSamskruthi Store<br />
                Traditional Jewellery Hub<br />
                India
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-maroon mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:njrapvc@gmail.com" className="hover:text-gold transition duration-300">
                  njrapvc@gmail.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-maroon mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+919876543210" className="hover:text-gold transition duration-300">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
