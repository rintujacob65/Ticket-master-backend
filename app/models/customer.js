const mongoose = require('mongoose');
require('mongoose-type-email')

const Schema = mongoose.Schema
const customerSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    email : {
        type : mongoose.SchemaTypes.Email,
        required : true
    },
    mobile : {
        type : String,
        required : true,
        minlength :10,
        maxlength :10
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer