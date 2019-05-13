const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Company = new Schema({
    name: { type: String},
    description: { type: String}
})

mongoose.model('company', Company);