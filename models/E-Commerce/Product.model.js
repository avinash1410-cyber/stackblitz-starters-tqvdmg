import mongoose from 'mongoose';

// Define the schema for Product
const productSchema = new mongoose.Schema(
  {
    // Define your schema fields here
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    description: {
      type: String,
    },
    Image: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create and export the Product model
export const Product = mongoose.model('Product', productSchema);
