const mongoose = require('mongoose');
const { Schema } = mongoose;

const AmountVolunteerSchema = new Schema({
  avt: Number,
  population_mid_year: Number,
  avt_per_people: Number  // Removed the calculation here
});

const AobSchema = new Schema({
  aob_63: Number,
  aob_64: Number,
  aob_65: Number,
});

const MedicalPersonSchema = new Schema({
  doc_63: Number,
  dent_63: Number,
  phar_63: Number,
  nurse_63: Number,
  doc_64: Number,
  dent_64: Number,
  phar_64: Number,
  nurse_64: Number,
  doc_65: Number,
  dent_65: Number,
  phar_65: Number,
  nurse_65: Number
});

const HospitalDataSchema = new Schema({
  hospital_comunity: Number,
  hospital_general: Number,
  hospital_center: Number,
  hospital_Subdistricthealthpromotion: Number,
  DistrictPublicHealthOffice: Number,
  data_md_per_year: [MedicalPersonSchema],
  data_bad_per_year: [AobSchema],
  data_amount_volunteer: [AmountVolunteerSchema]
});

const PopulationSchema = new Schema({
  age_group: String,
  gender: String,
  population: Number,
  percentage: Number
});

const ProvinceSchema = new Schema({
  province_code: String,
  province_name: String,
  administrative_region: String,
  base_year: Number,
  area: Number,
  population_2566: Number,
  population_density: Number,
  number_households: Number,
  province_municipality: Number,
  city_municipality: Number,
  town_municipality: Number,
  district_municipality: Number,
  local_administration_organization: Number,
  population_data: [PopulationSchema], // เก็บข้อมูลประชากรตามช่วงอายุและเพศ
  hospital_data: [HospitalDataSchema]
});

module.exports = mongoose.model('Province', ProvinceSchema);
