const { cartsService } = require('../services');
const { catchAsync } = require('../utils/err');

const showCart = catchAsync(async (req, res) => {
    const user_id = req.user;
    const result = await cartsService.showCart(user_id);
    if (!result[0]) {
        return res.status(200).json({ message: '장바구니가 비어있습니다.' });
    }
    return res.status(200).json({ result });
});

module.exports = { showCart };
