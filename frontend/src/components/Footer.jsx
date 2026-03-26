import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-maroon to-maroon text-ivory mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-2">SriSamskruthi</h3>
            <p className="text-sm text-ivory opacity-80">
              Handcrafted Traditional Jewellery with authentic Indian designs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <a href="#about" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Bangles" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  Bangles
                </Link>
              </li>
              <li>
                <Link to="/products?category=Chains" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  Chains
                </Link>
              </li>
              <li>
                <Link to="/products?category=Rings" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/products?category=Earrings" className="text-ivory hover:text-gold transition duration-300 text-sm">
                  Earrings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span>📍</span>
                <span>SriSamskruthi Store, India</span>
              </li>
              <li className="flex gap-2">
                <span>📧</span>
                <a href="mailto:njrapvc@gmail.com" className="hover:text-gold transition duration-300">
                  njrapvc@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <span>📱</span>
                <a href="tel:+916304064393" className="hover:text-gold transition duration-300">
                  +91 63040 64393
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gold border-opacity-30 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-ivory opacity-80">
            © {currentYear} SriSamskruthi. All rights reserved. | Handcrafted with ❤️
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gold hover:text-ivory transition duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gold hover:text-ivory transition duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gold hover:text-ivory transition duration-300 text-sm">
              Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
