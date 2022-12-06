const { writingsDao } = require('../models');

const searchTitle = async (searchWord) => {
    return await writingsDao.searchTitle(searchWord);
};

const getWritings = async (price, cate_id, offset, limit) => {
    return await writingsDao.getWritings(price, cate_id, offset, limit);
};
module.exports = { searchTitle, getWritings };
