const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  menu_item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  customer_name: { type: String, required: true },
  order_type: { type: String, enum: ['DINE_IN', 'TAKEAWAY', 'DELIVERY'], required: true },
  created_at: { type: Date, default: Date.now },
  items: [OrderItemSchema],
  total_price: { type: Number, required: true },
});

module.exports = mongoose.model('Order', OrderSchema);