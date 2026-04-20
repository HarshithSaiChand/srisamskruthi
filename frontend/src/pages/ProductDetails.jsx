import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { productAPI } from '../utils/api';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await productAPI.getById(id);
        if (response.success) {
          setProduct(response.data);
          setMainImage(response.data.image);
        }
      } catch (err) {
        setError('Failed to load product details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(value, product?.stock || 1));
    setQuantity(newQuantity);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-3xl font-bold text-maroon mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-gold text-maroon px-6 py-2 rounded-lg font-semibold hover:bg-deepGold transition duration-300"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-gray-600">
          <button
            onClick={() => navigate('/products')}
            className="hover:text-gold transition duration-300"
          >
            Products
          </button>
          <span>/</span>
          <span className="text-maroon font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div 
              className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center cursor-pointer hover:shadow-xl transition duration-300 relative group"
              onClick={() => setIsZoomed(true)}
            >
              <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                🔍
              </div>
              <img
                src={mainImage || product.image}
                alt={product.name}
                className="w-full h-auto max-h-96 object-contain rounded-lg transition-all duration-300"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
                }}
              />
            </div>
            
            {/* Thumbnails Gallery */}
            {product.images && product.images.length > 0 && (
              <div className="flex gap-3 p-3 overflow-x-auto bg-white rounded-lg shadow-md snap-x">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setMainImage(img)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none ${mainImage === img ? 'border-maroon shadow-md' : 'border-transparent opacity-70 hover:opacity-100 snap-center'}`}
                  >
                    <img src={img} alt={`thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-gold text-maroon px-3 py-1 rounded-full text-sm font-bold">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-maroon mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-2xl text-yellow-500">★</span>
                <span className="text-lg font-semibold text-maroon">{product.rating || 4.5}</span>
              </div>
              <span className="text-gray-600">({product.reviews || 0} reviews)</span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-gold to-deepGold text-maroon px-6 py-4 rounded-lg mb-6">
              <p className="text-sm opacity-80">Price</p>
              <h2 className="text-4xl font-bold">₹{product.price.toLocaleString('en-IN')}</h2>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-maroon mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <p className={`text-lg font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0
                  ? '✓ In stock'
                  : '✗ Out of stock'}
              </p>
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="mb-6">
                <label className="block text-maroon font-semibold mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="bg-gray-200 text-maroon px-4 py-2 rounded-lg font-bold hover:bg-gray-300 transition duration-300"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-16 text-center border border-gray-300 rounded-lg py-2 px-3 font-semibold"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="bg-gray-200 text-maroon px-4 py-2 rounded-lg font-bold hover:bg-gray-300 transition duration-300"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-3 rounded-lg font-bold text-lg transition duration-300 mb-4 ${
                product.stock > 0
                  ? 'bg-gold text-maroon hover:bg-deepGold cursor-pointer'
                  : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
            >
              {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Continue Shopping Button */}
            <button
              onClick={() => navigate('/products')}
              className="w-full py-3 rounded-lg font-bold text-lg bg-maroon text-ivory hover:bg-deepGold transition duration-300"
            >
              Continue Shopping
            </button>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-maroon mb-4">Why Choose SriSamskruthi?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>100% Authentic Handcrafted</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Premium Quality Materials</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>30-Day Money Back Guarantee</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Free Shipping on Orders Over ₹5000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition font-bold"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            ×
          </button>
          <img
            src={mainImage || product.image}
            alt={product.name}
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl scale-100 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} /* prevents closing when clicking the image itself, though clicking wrapper closes it */
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
