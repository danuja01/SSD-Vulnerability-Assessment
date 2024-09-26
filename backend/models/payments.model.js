const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    paymentID : {
        type : String,
        required : true
    },

    paymentDescription : {
        type : String,
        required : true
    },

    paymentCategory : {
        type : String,
        required : true
    },

    paymentDate : {
        type : Date,
        required : true
    },

    paymentAmount : {
        type : String,
        required : true
    }
})

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;