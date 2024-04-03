const productService = require('../services/productService');

exports.getProductDetails = async (req, res) => {
    try {
        const product = await productService.getProductDetails(req.params.categoryName, req.params.productId);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
