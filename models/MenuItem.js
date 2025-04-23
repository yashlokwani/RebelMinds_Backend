const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  is_available: { type: Boolean, default: true },
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);