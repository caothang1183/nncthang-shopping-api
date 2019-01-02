var express = require('express');
var categoryController = require('../controller/CategoryController')
var router = express.Router();

router.route('/').get(categoryController.findAll);

module.exports = router;