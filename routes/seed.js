const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
const seedData = require('../seed/seedData');

// GET /seed
router.get('/', async (req, res) => {
  await Restaurant.deleteMany();
  await MenuItem.deleteMany();

  const restaurants = await Restaurant.insertMany(seedData.restaurants);
  const items = [];
  for (const r of restaurants) {
    const menuItems = seedData.menu_items.filter(mi => mi.restaurant_name === r.name)
                                 .map(mi => ({ ...mi, restaurant_id: r._id }));
    items.push(...menuItems);
  }
  await MenuItem.insertMany(items);

  res.send('Seed completed');
});

module.exports = router;