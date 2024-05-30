const mongoose = require('mongoose')
const { Schema } = mongoose;

//sheet 73
const LaborForceSchema = new Schema({
    year: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    employment_type: { type: String, enum: ['formal', 'informal'], required: true },
    total_workers: { type: Number, required: true },
});

// sheet 24-25
const LaborSchema = new Schema({
    year: Number,
    in_system: { type: Number, required: true },
    out_system: { type: Number, required: true }
});
const ForeignWorkerSchema = new Schema({
    year: Number,
    total: { type: Number, required: true }
});
const HouseholdSavingSchema = new Schema({
    year: Number,
    percentage: { type: Number, required: true }
});

const laborModel = new Schema({
    Labor : [LaborSchema],
    LaborForce: [LaborForceSchema],
    ForeignWorker : [ForeignWorkerSchema],
    HouseholdSaving : [HouseholdSavingSchema]
})

module.exports = mongoose.model('laborModel',laborModel)