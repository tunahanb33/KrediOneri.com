const consumerLoansSchema = new mongoose.Schema({
    bank: {
        type: mongoose.Types.ObjectId,
        ref: 'banks',
    },
    productId: {
        type: String,
        default: Math.floor(Math.random() * Date.now()).toString(36)
    },
    creditName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    creditAmount: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
    },
    creditTerm: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
    },
    interestRate: {
        type: Number,
        required: true,
    },
}, { versionKey: false });

module.exports = mongoose.model('consumerLoans', consumerLoansSchema);