const mongoose = require('mongoose')
const { Schema } = mongoose;

const StudentSchema = new Schema({
    year: Number,
    disadvantaged: {
        total: Number,
        special: Number,
        combined: Number
    },
    dropouts: {
        total: Number,
        male: Number,
        female: Number
    },
    underprivileged: {
        total: Number,
        male: Number,
        female: Number
    },
    hardships: {
        street_children: Number,
        minority_groups: Number,
        abandoned_children: Number,
        forced_child_labor: Number,
        abused_children: Number,
        drug_abuse: Number,
        involved_in_sex_trade: Number,
        institutionalized_children: Number,
        impoverished_children: Number,
        delinquents: Number,
        self_supporting: Number,
        AIDS_affected: Number,
        multiple_categories: Number
    },
    school_dropout: {
        total: Number,
        male: Number,
        female: Number
    },
    G1_2566: {
        total: Number,
        male: Number,
        female: Number
    },
    G2_2565: {
        total: Number,
        male: Number,
        female: Number
    },
    average_years_of_education: {
        '62': Number,
        '63': Number,
        '64': Number,
        '65': Number
    }
});
const KindergartenSchema = new Schema({
    state_preparatory_schools: Number,
    private_preparatory_schools: Number,
    public_preparatory_schools: Number,
    bangkok_pattaya_preparatory_schools: Number,
    total_preparatory_schools: Number,
    state_before_primary_schools: Number,
    private_before_primary_schools: Number,
    public_before_primary_schools: Number,
    bangkok_pattaya_before_primary_schools: Number,
    total_before_primary_schools: Number,
    state_primary_schools: Number,
    private_primary_schools: Number,
    public_primary_schools: Number,
    bangkok_pattaya_primary_schools: Number,
    total_primary_schools: Number,
    state_lower_secondary_schools: Number,
    private_lower_secondary_schools: Number,
    public_lower_secondary_schools: Number,
    bangkok_pattaya_lower_secondary_schools: Number,
    total_lower_secondary_schools: Number,
    state_upper_secondary_schools: Number,
    private_upper_secondary_schools: Number,
    public_upper_secondary_schools: Number,
    bangkok_pattaya_upper_secondary_schools: Number,
    total_upper_secondary_schools: Number,
    state_vocational_certificate_office: Number,
    provincial_vocational_certificate_office: Number,
    total_vocational_certificate_office: Number
});
const EducationDepartmentSchema = new Schema({
    basic_education_committee_office: OfficeSchema,
    private_education_promotion_committee_office: OfficeSchema,
    vocational_education_committee_office: OfficeSchema,
    private_vocational_education_committee_office: OfficeSchema,
    local_administration_promotion_department: OfficeSchema,
    total_schools_in_system: Number,
    learning_promotion_department: OfficeSchema,
    total_schools_all: Number
});
const AverageMonthlyIncomeSchema = new Schema({
    year: { type: Number, required: true },
    income: {
        '60': { type: Number, required: true },
        '62': { type: Number, required: true },
        '64': { type: Number, required: true }
    }
});