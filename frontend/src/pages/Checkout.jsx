import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import { orderAPI } from '../utils/api';
import PaymentGateway from '../components/PaymentGateway';

const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", 
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", 
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipcode: ''
    }
  });

  const cartTotal = getCartTotal();
  
  const getShippingCost = (stateStr, total) => {
    if (!stateStr) return 80; // Default base rate before state is entered

    const state = stateStr.trim().toLowerCase();

    // Nearby (Andhra / Telangana)
    if (
      state.includes('andhra') || 
      state.includes('telangana') || 
      state === 'ap' || 
      state === 'ts' || 
      state === 'tg'
    ) {
      return 80; 
    }

    // Other States (Tamil Nadu, Karnataka, Maharashtra, etc.)
    if (
      state.includes('tamil') || 
      state.includes('karnataka') || 
      state.includes('maharashtra') || 
      state.includes('kerala') || 
      state.includes('goa') || 
      state === 'tn' || 
      state === 'ka' || 
      state === 'mh' || 
      state === 'kl'
    ) {
      return 120; 
    }

    // Far States (Delhi / North India / Default)
    return 150; 
  };

  const estimatedShipping = getShippingCost(formData.address.state, cartTotal);
  const finalTotal = cartTotal + estimatedShipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all customer details');
      return false;
    }

    if (!formData.address.street || !formData.address.city || !formData.address.state || !formData.address.zipcode) {
      setError('Please fill in complete address');
      return false;
    }

    if (cartItems.length === 0) {
      setError('Your cart is empty');
      return false;
    }

    return true;
  };

  const handlePlaceOrderClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPaymentGateway(true);
    }
  };

  const handlePlaceOrder = async (method) => {
    try {
      setLoading(true);
      setShowPaymentGateway(false); // Hide modal while processing

      // Prepare order data
      const orderData = {
        products: cartItems.map((item) => ({
          productId: item._id || item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        totalAmount: finalTotal,
        customer: formData,
        paymentMethod: method || 'bank_transfer'
      };

      // Create order
      const response = await orderAPI.createOrder(orderData);

      if (response.success) {
        const orderSummaryTxt = cartItems.map(item => `${item.quantity}x ${item.name}`).join(', ');
        const waText = `Hello SriSamskruthi! I just placed an order on the website.

*Name*: ${formData.name}
*Phone*: ${formData.phone}
*Order Total*: ₹${finalTotal.toLocaleString('en-IN')}
*Items*: ${orderSummaryTxt}

I have transferred the amount to the bank account. Please verify my payment and confirm the order!`;

        setSuccess({
          encodedMsg: encodeURIComponent(waText)
        });
        clearCart();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Redirect if cart is empty
  if (cartItems.length === 0 && !success) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center py-8">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold text-maroon mb-4">Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Add some beautiful jewellery to your cart before checkout
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-gold text-maroon px-8 py-3 rounded-lg font-bold text-lg hover:bg-deepGold transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Success message
  if (success) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center py-8">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-md">
          <div className="text-6xl mb-4 text-green-500">✓</div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order! To finalize your purchase and help us verify your bank transfer, please send us your order details securely via WhatsApp.
          </p>
          <a
            href={`https://wa.me/919876543210?text=${success.encodedMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300 mb-4 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">💬</span> Confirm on WhatsApp
          </a>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-300 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory py-8 relative">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      {showPaymentGateway && (
        <PaymentGateway 
          total={finalTotal} 
          onClose={() => setShowPaymentGateway(false)} 
          onPaymentSuccess={handlePlaceOrder} 
        />
      )}

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-maroon mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrderClick} className="bg-white rounded-lg shadow-lg p-8">
              {/* Customer Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-maroon mb-6">Customer Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-maroon font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-maroon font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-maroon font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
                    required
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-maroon mb-6">Delivery Address</h2>

                <div className="mb-6">
                  <label className="block text-maroon font-semibold mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    placeholder="Enter street address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-maroon font-semibold mb-2">City *</label>
                    <input
                      type="text"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      placeholder="Enter city"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-maroon font-semibold mb-2">State *</label>
                    <select
                      name="address.state"
                      value={formData.address.state}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold bg-white"
                      required
                    >
                      <option value="" disabled>Select state</option>
                      {indianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-maroon font-semibold mb-2">Zip Code *</label>
                    <input
                      type="text"
                      name="address.zipcode"
                      value={formData.address.zipcode}
                      onChange={handleInputChange}
                      placeholder="Enter zip code"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Order Items Review */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-maroon mb-6">Order Review</h2>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-maroon">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gold">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-gold to-deepGold text-maroon py-3 rounded-lg font-bold text-lg hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Place Order & Pay'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-maroon mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
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

              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                <span className="text-lg font-bold text-maroon">Total</span>
                <span className="text-3xl font-bold text-gold">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900 leading-relaxed">
                <p className="font-semibold mb-3 flex items-center gap-2 text-blue-800">
                  <span className="text-lg">🏦</span> Bank Transfer Details
                </p>
                <p className="mb-2 text-blue-700">Please transfer the total amount to the following bank account to complete your order:</p>
                <div className="bg-white p-3 rounded border border-blue-100 font-mono text-xs shadow-sm space-y-1">
                  <p><span className="font-bold text-gray-600 font-sans">Account Holder:</span> PINGALI TIRUMALADATTA SAI PARASURAM</p>
                  <p><span className="font-bold text-gray-600 font-sans">Account Number:</span> 50100745507828</p>
                  <p><span className="font-bold text-gray-600 font-sans">IFSC Code:</span> HDFC0001996</p>
                  <p><span className="font-bold text-gray-600 font-sans">Branch:</span> HYDERGUDA</p>
                </div>
                <p className="mt-3 text-xs text-blue-600 italic">* Your order will be processed once we verify your payment.</p>
              </div>

              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <span>✓</span>
                  <span>100% Secure Payment</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Money-back Guarantee</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>✓</span>
                  <span>24/7 Customer Support</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
