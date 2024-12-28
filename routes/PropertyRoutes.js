const express = require('express');
const router = express.Router();
const { addProperty, getProperties } = require('../controllers/PropertyController');

// Add property route (without authentication middleware)
router.post('/', addProperty);

// Get all properties route
router.get('/', getProperties);

module.exports = router;
