import * as mongoose from 'mongoose';

export const RideSchema = new mongoose.Schema({
    // scooterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    //userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scooter', required: true},
    startTime: { type: Date },
    endTime: { type: Date },
    startLocation: { 
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], required: true }
    },
    endLocation: { 
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], required: true }
    },
    distance: { type: Number },
    fare: { type: String },
    status: { type: String, enum: ['active', 'completed', 'canceled'], default: 'active'}
}, { timestamps: true })