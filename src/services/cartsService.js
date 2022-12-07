const { cartsDao } = require('../models');

const showCart = async (user_id) => {
    return await cartsDao.showCart(user_id);
};

module.exports = { showCart };
