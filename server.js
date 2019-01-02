var port = process.env.PORT || 4444;
var express = require('express');
var bodyParser = require('body-parser');
var home = require('./routes/home');
var category = require('./routes/category');
var product = require('./routes/product');

app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Routes */

app.use('/api', home);
app.use('/api/categories', category);
app.use('/api/products', product);

/* ------------ */

app.get('*', (req, res) => {
    res.status(404).json({
        code: 3,
        msg: 'bad request',
        description: 'router is not exist'
    });
});


app.listen(port, () => console.log('[Server] Running on port :' + port));