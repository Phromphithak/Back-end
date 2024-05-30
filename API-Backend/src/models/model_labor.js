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

// sheet 21 and 22
const UnemploymentSchema = new Schema({
    total: { type: Number, required: true },
    male: { type: Number, required: true },
    female: { type: Number, required: true },
    unemployment_rate: {
        '63': { type: Number, required: true },
        '64': { type: Number, required: true },
        '65': { type: Number, required: true },
        '66': { type: Number, required: true }
    }
});

//sheet 84
const employmentSchema = new Schema({
    totalEmployed: { type: Number, required: true }, // ผู้มีงานทำทั้งหมด (รวม)
    maleEmployed: { type: Number, required: true }, // ผู้มีงานทำทั้งหมด (ชาย)
    femaleEmployed: { type: Number, required: true }, // ผู้มีงานทำทั้งหมด (หญิง)
    totalElderlyEmployed: { type: Number, required: true }, // ผู้สูงอายุที่ทำงาน (รวม)
    maleElderlyEmployed: { type: Number, required: true }, // ผู้สูงอายุที่ทำงาน (ชาย)
    femaleElderlyEmployed: { type: Number, required: true }, // ผู้สูงอายุที่ทำงาน (หญิง)
    elderlyToTotalEmploymentRatio: { type: Number, required: true }, // สัดส่วนแรงงานผู้สูงอายุต่อผู้มีงานทำทั้งหมด
});

const laborModel = new Schema({
    Labor : [LaborSchema],
    ForeignWorker : [ForeignWorkerSchema],
    HouseholdSaving : [HouseholdSavingSchema],
    Unemployment: [UnemploymentSchema],
    employment: [employmentSchema],
    LaborForce: [LaborForceSchema],
})

module.exports = mongoose.model('laborModel',laborModel)