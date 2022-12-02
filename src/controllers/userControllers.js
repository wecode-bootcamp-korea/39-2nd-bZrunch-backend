const { userService } = require('../services');
const { catchAsync } = require('../utils/err');

const signIn = catchAsync(async (req, res) => {
    try {
        const { KAKAO_CODE } = req.body;
        const userInfo = await userService.kakaoLogin(KAKAO_CODE);

        return res.status(200).json({ userInfo: userInfo });
    } catch (err) {
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
});

module.exports = { signIn };
