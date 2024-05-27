const mongoose = require('mongoose')
const Schema = mongoose;

const HealthDataSchema = new Schema({
    year: { type: Number, required: true },
    total_patients: {
        '2022': { type: Number },
        '2023': { type: Number }
    },
    increase_decrease_rate_66: { type: Number },
    suicide_attempts: {
        '63': { type: Number },
        '64': { type: Number },
        '65': { type: Number },
        '66': { type: Number }
    }
});

const SuicideAttemptSchema = new Schema({
    year: { type: Number, required: true },
    attempts: {
        '63': { type: Number, required: true },
        '64': { type: Number, required: true },
        '65': { type: Number, required: true },
        '66': { type: Number, required: true }
    }
});
const SuicideSuccessSchema = new Schema({
    count: { type: Number, required: true },
    mid_year_population: { type: Number, required: true },
    success_rate: { type: Number, required: true }
});
const PatientSchema = new Schema({
    year: { type: Number, required: true },
    cumulativeCount: { type: Number, required: true },
    newCount: { type: Number, required: true },
    oldAndNewCount: { type: Number, required: true },
    ratePerHundredThousand: { type: Number, required: true }
});
const MedicalPersonSchema = new Schema({
    year: { type: Number, required: true },
    doc: { type: Number, required: true },
    dent: { type: Number, required: true },
    phar: { type: Number, required: true },
    nurse: { type: Number, required: true }
});

const AobSchema = new Schema({
    year: { type: Number, required: true },
    aob: { type: Number, required: true }
});

const HospitalDataSchema = new Schema({
    year: { type: Number, required: true },
    types: {
        hospital_community: { type: Number, required: true },
        hospital_general: { type: Number, required: true },
        hospital_center: { type: Number, required: true },
        hospital_Subdistricthealthpromotion: { type: Number, required: true },
        DistrictPublicHealthOffice: { type: Number, required: true }
    },
    medical_personnel: [MedicalPersonSchema],
    aob_data: [AobSchema],
    volunteer_data: [AmountVolunteerSchema],
    patient_data: [PatientSchema],
    SuicideAttempt: [SuicideAttemptSchema],
    SuicideSuccess: [SuicideSuccessSchema],
    HealthData: [HealthDataSchema]
});

