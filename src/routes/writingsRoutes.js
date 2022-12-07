const express = require('express');

const { writingsController } = require('../controllers');

const writingsRoutes = express.Router();

writingsRoutes.get('/search', writingsController.searchTitle);
writingsRoutes.get('', writingsController.getWritings);
writingsRoutes.get('/:writings_id', writingsController.getwritingInfo);

module.exports = { writingsRoutes };
