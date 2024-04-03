const axios = require('axios');
const apiUtils = require('../utils/apiUtils');
const { v4: uuidv4 } = require('uuid');

exports.generateUniqueId = () => {
    return uuidv4();
};

exports.getCategoryProducts = async (company, categoryName, queryParams = {}) => {
    try {
        
        const { top, minPrice, maxPrice } = queryParams;
        const url = `http://20.244.56.144/test/companies/${company}/categories/${categoryName}/products`;
        const token = "process.env.BEARER_TOKEN";
        const headers = {
            Authorization: `Bearer ${token}`
        };
        
        const response = await apiUtils.fetchDataFromAPI(url, { top, minPrice, maxPrice }, headers);

        const products = response.data.map(product => ({
            ...product,
            productId: generateUniqueId()
        }));

        return products;
    } 
    catch (error) {
        throw error;
    }
};

exports.getProductDetails = async (company, categoryName, productId) => {
    try {
        const url = `http://20.244.56.144/test/companies/${company}/categories/${categoryName}/products/${productId}`;
        const token = process.env.BEARER_TOKEN;
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await apiUtils.fetchDataFromAPI(url, {}, headers);
        return response.data;
    } 
    catch (error) {
        throw error;
    }
};

exports.sortProducts = (products, sortBy, sortOrder) => {
    return products.sort((a, b) => {
        if (sortOrder === 'asc') {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        } else {
            if (a[sortBy] > b[sortBy]) return -1;
            if (a[sortBy] < b[sortBy]) return 1;
            return 0;
        }
    });
};

exports.getTopProducts = async (company, categoryName, queryParams) => {
    try {
        const { top, minPrice, maxPrice, sortBy, sortOrder } = queryParams;
        const url = `http://20.244.56.144/test/companies/${company}/categories/${categoryName}/products`;
        const token = process.env.BEARER_TOKEN;
        const headers = {
            Authorization: `Bearer ${token}`
        };
        
        const response = await apiUtils.fetchDataFromAPI(url, { top, minPrice, maxPrice }, headers);
        let products = response.data;

        if (sortBy && sortOrder) {
            products = exports.sortProducts(products, sortBy, sortOrder); // Reference the sortProducts function correctly
        }

        return products;
    } 
    catch (error) {
        throw error;
    }
};
