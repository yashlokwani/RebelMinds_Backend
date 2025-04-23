const express = require('express');
const router = express.Router();
const { createOrder, getOrder } = require('../controllers/orderController');

// POST /orders
router.post('/', createOrder);

// GET /orders/:id
router.get('/:id', getOrder);

module.exports = router;