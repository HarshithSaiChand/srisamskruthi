import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="bg-gradient-to-r from-maroon to-maroon shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img src="/logo.jpg" alt="SriSamskruthi Logo" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <h1 className="text-2xl font-bold text-gold">SriSamskruthi</h1>
              <p className="text-xs text-ivory">Handcrafted Traditional Jewellery</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-ivory hover:text-gold transition duration-300 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-ivory hover:text-gold transition duration-300 font-medium">
              Shop
            </Link>
            <a href="#about" className="text-ivory hover:text-gold transition duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-ivory hover:text-gold transition duration-300 font-medium">
              Contact
            </a>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative group">
              <span className="text-3xl cursor-pointer text-ivory hover:text-gold transition duration-300">
                🛒
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-maroon rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold group-hover:bg-ivory">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 flex gap-4">
          <Link to="/" className="text-ivory hover:text-gold transition duration-300 text-sm">
            Home
          </Link>
          <Link to="/products" className="text-ivory hover:text-gold transition duration-300 text-sm">
            Shop
          </Link>
          <a href="#about" className="text-ivory hover:text-gold transition duration-300 text-sm">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
