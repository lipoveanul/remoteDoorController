const mongoose = require('mongoose');
const config = require('config');
const URL = config.get('URL') || 'localhost:27017';

function dbConnection() {
    mongoose.connect(`mongodb://${URL}`, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB....');
    });
}
module.exports = {
    dbConnection
}