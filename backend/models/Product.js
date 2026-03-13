const mongoose = require('mongoose');

// Product Schema for SriSamskruthi Jewellery
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
      maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    category: {
      type: String,
      enum: ['Necklace', 'Bangles', 'Chains', 'Rings', 'Earrings'],
      required: [true, 'Please select a category']
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: [0, 'Price cannot be negative']
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [500, 'Description cannot exceed 500 characters']
    },
    image: {
      type: String,
      required: [true, 'Please provide an image URL'],
      default: 'https://via.placeholder.com/400x400?text=SriSamskruthi'
    },
    stock: {
      type: Number,
      required: [true, 'Please provide stock quantity'],
      min: [0, 'Stock cannot be negative'],
      default: 0
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviews: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);
