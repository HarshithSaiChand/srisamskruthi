import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const cartTotal = getCartTotal();
  const estimatedShipping = cartTotal > 5000 ? 0 : 150;
  const finalTotal = cartTotal + estimatedShipping;

  return (
    <div className="min-h-screen bg-ivory py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-maroon mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold text-maroon mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Explore our beautiful collection of handcrafted jewellery
            </p>
            <button
              onClick={() => navigate('/products')}
              className="bg-gold text-maroon px-8 py-3 rounded-lg font-bold text-lg hover:bg-deepGold transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-maroon to-deepGold text-ivory p-6">
                  <div className="grid grid-cols-12 gap-4 text-sm font-semibold">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Price</div>
                    <div className="col-span-2 text-center">Action</div>
                  </div>
                </div>

                {/* Cart Items List */}
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 hover:bg-gray-50 transition duration-300">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Product Info */}
                        <div className="col-span-6 flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                            }}
                          />
                          <div>
                            <h3 className="font-bold text-maroon">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.category}</p>
                            <p className="text-gold font-semibold mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-gray-200 text-maroon px-2 py-1 rounded font-bold hover:bg-gray-300"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, parseInt(e.target.value) || 1)
                              }
                              className="w-12 text-center border border-gray-300 rounded py-1 px-2"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-gray-200 text-maroon px-2 py-1 rounded font-bold hover:bg-gray-300"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Total Price */}
                        <div className="col-span-2 text-right">
                          <p className="font-bold text-maroon">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <div className="col-span-2 text-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Actions */}
                <div className="bg-gray-50 p-6 flex gap-4">
                  <button
                    onClick={() => navigate('/products')}
                    className="flex-1 bg-maroon text-ivory py-3 rounded-lg font-semibold hover:bg-deepGold transition duration-300"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={() => clearCart()}
                    className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-maroon mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {estimatedShipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${estimatedShipping.toLocaleString('en-IN')}`
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-maroon">Total</span>
                  <span className="text-3xl font-bold text-gold">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {cartTotal > 5000 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 text-sm text-green-700">
                    ✓ Free shipping eligible!
                  </div>
                )}

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-gradient-to-r from-gold to-deepGold text-maroon py-3 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => navigate('/products')}
                  className="w-full mt-3 bg-maroon text-ivory py-3 rounded-lg font-bold hover:bg-deepGold transition duration-300"
                >
                  Continue Shopping
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    ✓ Secure checkout<br/>
                    ✓ Money-back guarantee<br/>
                    ✓ 24/7 Customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
