const mongoose = require('mongoose');
const { Schema } = mongoose;

//sheet 85
const funeralAssistanceSchema = new Schema({
    year: { type: Number, required: true }, // ปีที่เก็บข้อมูล
    count: { type: Number, required: true }, // จำนวนผู้สูงอายุที่ได้รับการสงเคราะห์ในการจัดการศพตามประเพณี
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
//sheet 73
const LaborForceSchema = new Schema({
    year: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    employment_type: { type: String, enum: ['formal', 'informal'], required: true },
    total_workers: { type: Number, required: true },
});
//sheet 70
const ViolenceCauseSchema = new Schema({
    drug_abuse: { type: Number, required: true },
    alcohol_abuse: { type: Number, required: true },
    gambling: { type: Number, required: true },
    divorce: { type: Number, required: true },
    jealousy: { type: Number, required: true },
    revenge: { type: Number, required: true },
    economic_stress: { type: Number, required: true },
    physical_health_issues: { type: Number, required: true },
    mental_health_issues: { type: Number, required: true },
    feeling_of_empowerment: { type: Number, required: true },
    alcohol_and_drug_abuse: { type: Number, required: true },
    jealousy_and_revenge: { type: Number, required: true },
    jealousy_and_divorce: { type: Number, required: true },
    alcohol_and_revenge: { type: Number, required: true },
    drug_and_revenge: { type: Number, required: true },
});
// sheet 69.1
const DomesticViolenceSchema = new Schema({
    male_victims: { type: Number, required: true },
    female_victims: { type: Number, required: true },
    total_victims: { type: Number, required: true },
    aspects: {
        physical: { type: Number, required: true },
        sexual: { type: Number, required: true },
        emotional: { type: Number, required: true },
        fatalities: { type: Number, required: true },
    },
});

//sheet 58-60
const InappropriateBehaviorSchema = new Schema({
    year: { type: Number, required: true },
    behavior_type: { type: String, required: true }, // ประเภทของพฤติกรรมไม่เหมาะสม เช่น ดื่มเครื่องดื่มที่มีแอลกอฮอล์, มั่วสุม, ติดเกมส์ เป็นต้น
    count: { type: Number, required: true }
});
const SexualBehaviorSchema = new Schema({
    year: { type: Number, required: true },
    behavior_type: { type: String, required: true }, // ประเภทของพฤติกรรมทางเพศ เช่น มีพฤติกรรมทางเพศ, อื่น ๆ
    count: { type: Number, required: true }
});

const OtherBehaviorSchema = new Schema({
    year: { type: Number, required: true },
    behavior_type: { type: String, required: true }, // ประเภทของพฤติกรรมอื่น ๆ เช่น ทำความรำคาญ, อื่น ๆ
    count: { type: Number, required: true }
});


const ChildAndYouthSchema = new Schema({
    year: { type: Number, required: true },
    behavior_type: { type: String, enum: ['behavior', 'substance_abuse', 'annoyance', 'gambling', 'sexual_behavior', 'other'], required: true }, // ประเภทของพฤติกรรม เช่น พฤติกรรมทางเพศ, ดื่มเครื่องดื่มที่มีแอลกอฮอล์, อื่น ๆ
    count: { type: Number, required: true }
});

const CommunityWelfareFundSchema = new Schema({
    fundName: String,
    year: Number,
    amount: Number
});
const RuralSufficiencySchema = new Schema({
    year: Number,
    households: Number
});

//sheet 38-41
const RoadAccidentSchema = new Schema({
    year: Number,
    injuries: Number,
    fatalities: Number,
    disabilities: Number
});

const SecureHomeProjectSchema = new Schema({
    year: Number,
    supportedHouseholds: Number
});

//sheet 36.1-37
const CaseSchema = new Schema({
    year: Number,
    life: {
        male: Number,
        female: Number,
        unspecified: Number,
        total: Number
    },
    property: {
        male: Number,
        female: Number,
        unspecified: Number,
        total: Number
    },
    population_mid_66: Number,
    life_per_100k: Number,
    property_per_100k: Number,
    life_ranking: Number,
    property_ranking: Number,
    drug_crime: {
        cases: {
            male: Number,
            female: Number,
            unspecified: Number,
            total: Number
        },
        arrests: {
            male: Number,
            female: Number,
            unspecified: Number,
            total: Number
        },
        cases_per_100k_population_mid_66: Number,
        arrests_ranking: Number
    },
    child_trafficking_victims: {
        male: Number,
        female: Number,
        total: Number
    },
    adult_trafficking_victims: {
        male: Number,
        female: Number,
        total: Number
    },
    total_trafficking_victims: Number
});

const riskandsafeModel = new Schema({
    funeralAssistance: [funeralAssistanceSchema],
    Labor: [LaborSchema],
    ForeignWorker: [ForeignWorkerSchema],
    HouseholdSaving: [HouseholdSavingSchema],
    Unemployment: [UnemploymentSchema],
    employment: [employmentSchema],
    LaborForce: [LaborForceSchema],
    ViolenceCause: [ViolenceCauseSchema],
    DomesticViolence: [DomesticViolenceSchema],
    InappropriateBehavior: [InappropriateBehaviorSchema],
    SexualBehavior: [SexualBehaviorSchema],
    OtherBehavior: [OtherBehaviorSchema],
    ChildAndYouth: [ChildAndYouthSchema],
    CommunityWelfareFund: [CommunityWelfareFundSchema],
    RuralSufficiency: [RuralSufficiencySchema],
    RoadAccident: [RoadAccidentSchema],
    SecureHomeProject: [SecureHomeProjectSchema],
    Case: [CaseSchema],

})

module.exports = riskandsafeModel;