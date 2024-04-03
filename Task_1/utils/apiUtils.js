const axios = require('axios');

exports.fetchDataFromAPI = async (url, params) => {
    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};
