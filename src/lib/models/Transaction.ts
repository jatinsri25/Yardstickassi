import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: 'Uncategorized',
    },
    type: {
        type: String,
        enum: ['expense', 'income'],
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema); 