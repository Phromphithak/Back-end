const mongoose = require('mongoose')
const { Schema } = mongoose;


const PopulationSchema = new Schema({
    female_0_17: { type: Number, required: true },
    female_18_25: { type: Number, required: true },
    female_26_59: { type: Number, required: true },
    female_60_above: { type: Number, required: true },
    female_other: { type: Number, required: true },
    female_total: { type: Number, required: true },
    total_population: { type: Number, required: true },
    female_ratio: { type: Number, required: true },
});

const PopulationByAgeAndGenderSchema = new Schema({
    year: { type: Number, required: true },
    male: {
        age_0_17: { type: Number, required: true },
        age_18_25: { type: Number, required: true },
        total: { type: Number, required: true }
    },
    female: {
        age_0_17: { type: Number, required: true },
        age_18_25: { type: Number, required: true },
        total: { type: Number, required: true }
    },
    total: { type: Number, required: true }
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
    year: { type: Number, required: true },
    proportion_good_height_for_age: { type: Number }
});
// Schema for data about children in orphanages
const OrphanageChildSchema = new Schema({
    number_of_children: { type: Number, required: true }
});

// Schema for data about orphanage families
const OrphanageFamilySchema = new Schema({
    number_of_families: { type: Number, required: true }
});

// Schema for data related to pregnancies and children
const ChildCareSchema = new Schema({
    year: { type: Number, required: true },
    pregnant_under_15: { type: Number, required: true },
    pregnant_under_20_repeat: { type: Number, required: true },
    children_born_to_mothers_15_19_per_thousand: { type: Number, required: true },
    children_born_to_mothers_10_14_per_thousand: { type: Number, required: true },
    single_registered_mother: { type: Number, required: true },
    single_registered_mother_privilege: { type: Number, required: true },
    single_registered_mother_compensation: { type: Number, required: true },
    single_registered_mother_young: { type: Number, required: true },
    single_registered_mother_young_privilege: { type: Number, required: true },
    single_registered_mother_young_compensation: { type: Number, required: true }
});

const StreetChildrenSchema = new Schema({
    number_of_children: { type: Number, required: true }
});

const populationdata = new Schema({
    Population : [PopulationSchema],
    PopulationByAgeAndGender : [PopulationByAgeAndGenderSchema],
    ChildDependencyRatio : [ChildDependencyRatioSchema],
    Newborn : [NewbornSchema],
    ChildWelfare : [ChildWelfareSchema],
    OrphanageChild : [OrphanageChildSchema],
    OrphanageFamily : [OrphanageFamilySchema],
    ChildCare : [ChildCareSchema],
    StreetChildren : [StreetChildrenSchema]
})
