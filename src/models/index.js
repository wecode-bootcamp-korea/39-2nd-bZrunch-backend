const authDao = require('./authDao');
const writingsDao = require('./writingsDao');
const likesDao = require('./likesDao');
const usersDao = require('./usersDao');
const paymentDao = require('./paymentDao');

module.exports = { writingsDao, authDao, paymentDao, likesDao, usersDao };
