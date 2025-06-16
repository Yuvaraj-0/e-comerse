import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    name: { type: String, required: true },       // required field
    price: { type: Number, required: true },      // required field
    quantity: { type: Number, default: 1 },
    imageUrl: { type: String },
  });
  

export default mongoose.model('Cart', cartSchema);
