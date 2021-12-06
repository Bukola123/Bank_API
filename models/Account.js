const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema ({
    Account_type: {
        type: String,
        Enum: ['Savings','Current'],
        default : 'Savings'
    },
    Account_Number :{
        type: Number,
        unique: true,
        min: 10,
        max: 10
        },
    Account_Balance:{
        type: Number
    },
    Transaction_History:{
        type: Array
    },
    Date: {
        type: Date,
        default: date.now()
    },
    Active: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('accountItem', accountSchema);