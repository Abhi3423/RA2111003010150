const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/:categoryName/products', categoryController.getCategoryProducts);

module.exports = router;
