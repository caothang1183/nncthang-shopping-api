var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json({
        message: 'welcome to shopping home API',
        description: 'demo api shopping home with transaction'
    });
});

module.exports = router;

