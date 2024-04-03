const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    company: String,
    discount: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
