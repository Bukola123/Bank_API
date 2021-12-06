const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    Title: {
        Enum: ['Deposit','Withdraw','Transfer']
    },
    Date: {
        type: Date,
        default: Date.now()
    },
    Description: {
        type: String,
    },
    Amount: {
        type: Number
    },
    Beneficiary: {
        type: Object,
        default: null
    },
    Sender: {
        type: Object,
        default: null
    },
    Transaction_type:{
        enum: ['Debit', 'Credit']
    },
    Transaction_Account:{

    }
});

module.exports = mongoose.model('transactionItem', transactionSchema);