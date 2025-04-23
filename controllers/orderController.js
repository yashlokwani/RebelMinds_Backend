const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

exports.createOrder = async (req, res) => {
  try {
    const { restaurant_id, customer_name, order_type, items } = req.body;
    let total_price = 0;
    const orderItems = [];

    // Validate each item
    for (const it of items) {
      const menuItem = await MenuItem.findOne({ _id: it.menu_item_id, restaurant_id });
      if (!menuItem || !menuItem.is_available) {
        return res.status(400).json({ error: `Item ${it.menu_item_id} not available` });
      }
      const itemTotal = menuItem.price * it.quantity;
      total_price += itemTotal;
      orderItems.push({
        menu_item_id: menuItem._id,
        name: menuItem.name,
        quantity: it.quantity,
        price: menuItem.price,
        total: itemTotal,
      });
    }

    // Save order
    const order = new Order({ restaurant_id, customer_name, order_type, items: orderItems, total_price });
    await order.save();
    
    return res.status(201).json({
      order_id: order._id,
      customer_name,
      order_type,
      created_at: order.created_at,
      items: orderItems.map(({ name, quantity, total }) => ({ name, quantity, total })),
      total_price,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    return res.json({
      order_id: order._id,
      customer_name: order.customer_name,
      order_type: order.order_type,
      created_at: order.created_at,
      items: order.items.map(({ name, quantity, total }) => ({ name, quantity, total })),
      total_price: order.total_price,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};