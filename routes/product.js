var express = require('express');
var productController = require('../controller/ProductController')
var router = express.Router();

router.route('/').get(productController.findAll);
router.route('/').post(productController.insert);

module.exports = router;