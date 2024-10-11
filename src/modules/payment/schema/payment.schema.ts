import * as mongoose from 'mongoose';

export const PaymentSchema = new mongoose.Schema({
    // rideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride', required: true},
    paymentType: { type: String, enum: ['debit', 'wallet'], default: 'wallet'},
    paymentDate: { type: Date },
    amount: { type: String },
    status: { type: String, enum: ['pending', 'completed', 'canceled'], default: 'pending'}
}, { timestamps: true })