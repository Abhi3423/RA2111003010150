const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/:company/:categoryName/products', categoryController.getCategoryProducts);

module.exports = router;
