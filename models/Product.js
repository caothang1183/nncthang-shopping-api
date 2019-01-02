var connect = require('../utils/database');
var mongoosePaginate = require('mongoose-paginate-v2');
var db = connect.database;
var mongoose = connect.mongoose;
// var autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(db);

var productChema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        require: true,
        min: 5,
        max: 50
    },
    image: String,
    price: Number,
    discount: Number,
    brand: {
        id: Number,
        name: String
    },
    category: {
        id: Number,
        name: String,
        image_url: String
    },
    location: String,
    new: Boolean,
    isCopy: Boolean,
    status: Boolean,
    created_at: {
        type: Date,
        default: new Date()
    }
});

// productChema.plugin(autoIncrement.plugin, {
//     model: 'Product',
//     field: 'id'
// });
productChema.plugin(mongoosePaginate);

var Product = db.model('Product', productChema);

module.exports = Product;