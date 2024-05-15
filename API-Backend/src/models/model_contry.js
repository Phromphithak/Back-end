const mongoose = require('mongoose');
const { Schema } = mongoose

// sheet8 บุคลากรทางแพทย์
const Medical_person = new Schema({
  doc_63 : Number,
  dent_63 : Number,
  phar_63 : Number,
  nurse_63 : Number,
  doc_64 : Number,
  dent_64 : Number,
  phar_64 : Number,
  nurse_64 : Number,
  doc_65 : Number,
  dent_65 : Number,
  phar_65 : Number,
  nurse_65 : Number
})

// sheet7 ประเด็นด้านสุขภาพ
const Hospital_data = new Schema({
  hospital_comunity: Number,
  hospital_general: Number,
  hospital_center: Number,
  hospital_Subdistricthealthpromotion: Number,
  DistrictPublicHealthOffice: Number,
  data_md_per_year : [Medical_person]
})



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
  population_data: [PopulationSchema], // เก็บข้อมูลประชากรตามช่วงอายุและเพศ
  Hospital_data : [Hospital_data]
});


// โมเดลข้อมูลประเทศ
const countrySchema = new Schema({
  country: String,
  administrative_region: String,
  region: String,
  country_code: String,
  database_year: Number,
  provinces: [ProvinceSchema], // เก็บข้อมูลของแต่ละจังหวัดในประเทศ
  total_population: Number // รวมจำนวนประชากรทั้งประเทศ
});



const country = mongoose.model('country', countrySchema);

module.exports = country;