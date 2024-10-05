import * as mongoose from 'mongoose';

export const ScooterSchema = new mongoose.Schema({
    name: { type: String, required: true},
    status: { type: String, required: true },
    batteryLevel: { type: String, required: true },
    latitude: { type: String, required: true, unique: true },
    longitude: { type: String, required: true }
}, { timestamps: true })