const mongoose = require('mongoose');
const { Schema } = mongoose;

const PopulationSchema = new Schema({
    year: { type: Number, required: true },
    chiledren : {
        male: {
            babe : {type : Number, required: true},
            age_0_6 : { type: Number, required: true},
            age_7_17: { type: Number, required: true },
            age_18_25: { type: Number, required: true },
        },
        female:{
            babe : {type : Number, required: true},
            age_0_6 : { type: Number, required: true},
            age_7_17: { type: Number, required: true },
            age_18_25: { type: Number, required: true },
        }
    },
    male: {  
        age_0_17: { type: Number, required: true },
        age_18_25: { type: Number, required: true },
        age_26_59: {type: Number, required : true},
        age_60plus: {type : Number, required : true},
    },
    female: {
        age_0_17: { type: Number, required: true },
        age_18_25: { type: Number, required: true },
        age_26_59: {type: Number, required : true},
        age_60plus: {type : Number, required : true},
    },
});

const ChildDependencyRatioSchema = new Schema({
    year: { type: Number },
    ratio: { type: Number }
});

const NewbornSchema = new Schema({
    year: Number,
    male: Number,
    female: Number,
    total: Number,
    rate: Number
});

const ChildWelfareSchema = new Schema({
    proportion_good_height_for_age: { type: Number }
});

const OrphanageChildSchema = new Schema({
    year: { type: Number, required: true },
    number_of_children: { type: Number, required: true }
});

const OrphanageFamilySchema = new Schema({
    number_of_families: { type: Number, required: true }
});

const ChildCareSchema = new Schema({
    year: { type: Number, required: true },
    pregnant_under_15: { type: Number, required: true },
    pregnant_under_20_repeat: { type: Number, required: true },
    children_born_to_mothers_15_19_per_thousand: { type: Number, required: true },
    children_born_to_mothers_10_14_per_thousand: { type: Number, required: true },
    single_registered_mother: { type: Number, required: true },
    single_registered_mother_privilege: { type: Number, required: true },
    single_registered_mother_compensation: { type: Number, required: true },
    registered_mother_young: { type: Number, required: true },
    registered_mother_young_privilege: { type: Number, required: true },
    registered_mother_young_compensation: { type: Number, required: true },
    single_registered_mother_young: { type: Number, required: true },
    single_registered_mother_young_privilege: { type: Number, required: true },
    single_registered_mother_young_compensation: { type: Number, required: true }
});

const StreetChildrenSchema = new Schema({
    number_of_children: { type: Number, required: true }
});


const PopulationDataSchema = new Schema({
    Population: [PopulationSchema],
    PopulationByAgeAndGender: [PopulationByAgeAndGenderSchema],
    ChildDependencyRatio: [ChildDependencyRatioSchema],
    Newborn: [NewbornSchema],
    ChildWelfare: [ChildWelfareSchema],
    OrphanageChild: [OrphanageChildSchema],
    OrphanageFamily: [OrphanageFamilySchema],
    ChildCare: [ChildCareSchema],
    StreetChildren: [StreetChildrenSchema],
});

module.exports = PopulationDataSchema;
