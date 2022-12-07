const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { authService } = require('../services');

const loginRequired = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            const error = new Error('NEED_ACCESS_TOKEN');
            error.statusCode = 401;

            return res.status(error.statusCode).json({ message: error.message });
        }

        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

        const user = await authService.getUserById(decoded.id);

        if (!user) {
            const error = new Error('USER_DOES_NOT_EXIST');
            error.statusCode = 404;

            return res.status(error.statusCode).json({ message: error.message });
        }

        req.user = user.id;
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = { loginRequired };
