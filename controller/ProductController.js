var Product = require('../models/Product');

exports.findAll = (req, res) => {
    var { page, perPage } = req.query;
    var options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10,
        sort: { created_at: 1 },
        status: true
    }
    Product.paginate({}, options, function (errors, data) {
        if (errors) return res.status(500).send(errors).json({ message: 'something wrong' });
        return res.status(200).json(data);
    });
}

exports.insert = (req, res) => {
    Product.create(req.body, (errors, data) => {
        if (errors) return res.status(500).json({ message: 'something wrong', errors });
        res.status(200).json(data);
    });
}