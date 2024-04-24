const mongoose = require('mongoose');
const { Schema } = mongoose

// โมเดลข้อมูลประชากร
const PopulationSchema = new Schema({
  age_group: String,
  gender: String,
  population: Number,
  percentage: Number
});

// โมเดลข้อมูลของแต่ละจังหวัด
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
  total: Number,
  population_data: [PopulationSchema] // เก็บข้อมูลประชากรตามช่วงอายุและเพศ
});


// โมเดลข้อมูลประเทศ
const countrySchema = new Schema({
  country: String,
  administrative_region: String,
  region: String,
  country_code: String,/////////////////
  database_year: Number,
  provinces: [ProvinceSchema], // เก็บข้อมูลของแต่ละจังหวัดในประเทศ
  total_population: Number // รวมจำนวนประชากรทั้งประเทศ
});



const country = mongoose.model('country', countrySchema);

module.exports = country;