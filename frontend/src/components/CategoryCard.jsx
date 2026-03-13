import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, icon, description, productCount }) => {
  return (
    <Link to={`/products?category=${category}`}>
      <div className="bg-gradient-to-br from-gold to-deepGold rounded-lg shadow-lg p-6 text-center cursor-pointer hover:shadow-2xl transition duration-300 transform hover:scale-105 h-full">
        {/* Icon */}
        <div className="text-5xl mb-3">
          {icon}
        </div>

        {/* Category Name */}
        <h3 className="text-2xl font-bold text-maroon mb-2">
          {category}
        </h3>

        {/* Description */}
        <p className="text-sm text-maroon opacity-80 mb-3">
          {description}
        </p>

        {/* Product Count */}
        <p className="text-sm font-semibold text-maroon">
          {productCount} Products
        </p>

        {/* Browse Button */}
        <button className="mt-4 bg-maroon text-ivory px-4 py-2 rounded-lg font-semibold hover:bg-ivory hover:text-maroon transition duration-300">
          Browse
        </button>
      </div>
    </Link>
  );
};

export default CategoryCard;
