import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import CategoryBanner from '../components/CategoryBanner';
import { productAPI } from '../utils/api';

const Products = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const categories = ['All', 'Necklace', 'Bangles', 'Chains', 'Rings', 'Earrings'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productAPI.getAllProducts();
        if (response.success) {
          setProducts(response.data);
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

  // Filter products based on category and price
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-ivory py-8">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-maroon mb-2">Our Products</h1>
          <p className="text-gray-600">Discover our exquisite collection of handcrafted jewellery</p>
        </div>

        {/* Category Banner */}
        {selectedCategory !== 'All' && <CategoryBanner category={selectedCategory} />}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-maroon mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-gold transition duration-300">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-maroon mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">₹{priceRange[0].toLocaleString('en-IN')}</span>
                    <span className="text-gold font-bold">₹{priceRange[1].toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange([0, 100000]);
                }}
                className="w-full bg-maroon text-ivory py-2 rounded-lg font-semibold hover:bg-deepGold transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <LoadingSpinner />
            ) : filteredProducts.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600">
                    Showing <span className="font-bold text-maroon">{filteredProducts.length}</span> products
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      onViewDetails={() => navigate(`/product/${product._id}`)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-maroon mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or browse all products
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 100000]);
                  }}
                  className="bg-gold text-maroon px-6 py-2 rounded-lg font-semibold hover:bg-deepGold transition duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
