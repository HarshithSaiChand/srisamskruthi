const mongoose = require('mongoose');

// Order Schema for SriSamskruthi Jewellery
const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        name: String,
        price: Number,
        quantity: {
          type: Number,
          required: true,
          min: 1
        }
      }
    ],
    totalAmount: {
      type: Number,
      required: true,
      min: 0
    },
    customer: {
      name: {
        type: String,
        required: [true, 'Please provide customer name'],
        trim: true
      },
      email: {
        type: String,
        required: [true, 'Please provide customer email'],
        lowercase: true
      },
      phone: {
        type: String,
        required: [true, 'Please provide customer phone number']
      },
      address: {
        street: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        },
        state: {
          type: String,
          required: true
        },
        zipcode: {
          type: String,
          required: true
        }
      }
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending'
    },
    paymentMethod: {
      type: String,
      enum: ['razorpay', 'upi', 'netbanking', 'creditcard'],
      default: 'razorpay'
    },
    orderStatus: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
      default: 'pending'
    },
    razorpayOrderId: String,
    razorpayPaymentId: String,
    notes: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);
