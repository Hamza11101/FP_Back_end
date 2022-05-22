const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    FirstName:{type:String,
    required:[true,'First Name field is required']},
    LastName:{type:String,
        required:[true,'Last Name field is required']},
    Email:{type:String,
        required:[true,'Email Name field is required']},
    Password:{type:String,
        required:[true,'Password Name field is required']},
    Role:{type:String,
        required:[true,'Role field is required']},

});

const User = mongoose.model('user',UserSchema);
module.exports = User;