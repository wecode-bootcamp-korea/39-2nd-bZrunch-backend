const { writingsDao } = require('../models');

const searchTitle = async (searchWord) => {
    return await writingsDao.searchTitle(searchWord);
};

const getAllWritings = async (price, offset, limit) => {
    return await writingsDao.getAllWritings(price, offset, limit);
};

module.exports = { searchTitle, getAllWritings };
