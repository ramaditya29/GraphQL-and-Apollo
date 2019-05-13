const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    name: String,
    age: Number
});

Users.statics.findOneName = function(name){
    return this.findOne({name: name});
}
mongoose.model('user', Users);