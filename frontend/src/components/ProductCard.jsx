import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105">
      {/* Product Image */}
      <div className="relative bg-ivory h-64 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
          }}
        />
        <div className="absolute top-3 right-3 bg-gold text-maroon px-3 py-1 rounded-full text-xs font-bold">
          {product.category}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-maroon truncate mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-yellow-500">★ {product.rating || 4.5}</span>
          <span className="text-xs text-gray-500">({product.reviews || 0} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 h-10 overflow-hidden">
          {product.description}
        </p>

        {/* Price and Stock */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-gold">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span className={`text-xs font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onViewDetails}
            className="flex-1 bg-maroon text-ivory py-2 rounded-lg font-semibold hover:bg-deepGold transition duration-300"
          >
            View Details
          </button>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 bg-gold text-maroon py-2 rounded-lg font-semibold hover:bg-sky-500 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
