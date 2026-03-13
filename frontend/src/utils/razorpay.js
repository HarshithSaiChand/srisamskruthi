// Razorpay Payment Integration for SriSamskruthi
import axios from 'axios';

const RAZORPAY_KEY_ID = process.env.VITE_RAZORPAY_KEY_ID;

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const handlePayment = async (orderData) => {
  const isRazorpayLoaded = await initializeRazorpay();
  if (!isRazorpayLoaded) {
    alert('Failed to load Razorpay. Please try again.');
    return;
  }

  try {
    // Create order on backend
    const response = await axios.post('/api/orders/create', {
      amount: orderData.totalAmount * 100, // Convert to paise
      customerEmail: orderData.email,
      customerPhone: orderData.phone
    });

    const { orderId } = response.data;

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: orderData.totalAmount * 100,
      currency: 'INR',
      name: 'SriSamskruthi',
      description: 'Handcrafted Traditional Jewellery',
      image: '/logo.jpg',
      order_id: orderId,
      handler: async (response) => {
        // Verify payment on backend
        try {
          const verifyResponse = await axios.post('/api/orders/verify', {
            orderId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature
          });

          if (verifyResponse.data.success) {
            alert('Payment successful! Order confirmed.');
            return true;
          }
        } catch (error) {
          alert('Payment verification failed. Please contact support.');
          return false;
        }
      },
      prefill: {
        email: orderData.email,
        contact: orderData.phone
      },
      theme: {
        color: '#8B4513' // Maroon color
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error('Payment error:', error);
    alert('Failed to initiate payment. Please try again.');
  }
};
