const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email : {
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otp :{
        type: Number,
        min: 4,
        max: 4

    },
    Account: {
        type: Object,
        ref: 'Account'
    },
    date: {
        type: Date,
        default: Date.now
    },
    Transaction_pin: {
        type: Number,
        min: 4,
        max: 4
    }

});

module.exports = mongoose.model('UserItem', userSchema);