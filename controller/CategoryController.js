var Product = require('../models/Product');

exports.findAll = (req, res) => {
    Product.aggregate([{
        $group: { _id: "$category" }
    }]).sort({ _id: 'asc' }).exec(function (errors, data) {
        if (errors) return res.status(500).json({ message: 'something wrong', errors });
        var arrBrand = []
        data.forEach(function (item) {
            arrBrand.push(item._id);
        });
        return res.status(200).json(arrBrand);
    });
}