const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts');

module.exports.contacts= require('./contacts');