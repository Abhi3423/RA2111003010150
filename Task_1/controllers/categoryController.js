const productService = require('../services/productService');

exports.getCategoryProducts = async (req, res) => {
    try {
        console.log(req.params)
        const products = await productService.getCategoryProducts(req.params.company, req.params.categoryName, req.query={});
        
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
