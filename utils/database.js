var mongoose = require('mongoose');
var API = require('../constants/API');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

exports.mongoose = mongoose;
exports.database = mongoose.createConnection(`mongodb://${API.USERNAME}:${API.PASSWORD}@ds251002.mlab.com:${API.PORT}/${API.DATABASE}`);