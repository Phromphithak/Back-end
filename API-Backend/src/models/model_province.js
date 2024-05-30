const mongoose = require('mongoose');
const {Schema} = mongoose;
const econamydata = require('./model_economy');
const educationdata = require('./model_education');
const elderdata = require('./model_elder');
const healtydata = require('./model_Healty');
const populationdata = require('./model_population_and_family');
const riskandsafedata = require('./model_risk_safety');
const supportdata = require('./model_support');
const otherdata = require('./model_other');
const labordata = require('./model_labor');


const ProvinceSchema = new Schema({
  year: { type: Number, required: true },
  province_code: { type: String, required: true },
  province_name: { type: String, required: true },
  administrative_region: { type: String, required: true },
  base_year: { type: Number, required: true },
  area: { type: Number, required: true },
  population_2566: { type: Number, required: true },
  population_density: { type: Number, required: true },
  number_households: { type: Number, required: true },
  municipality: {
    province_municipality: { type: Number, required: true },
    city_municipality: { type: Number, required: true },
    town_municipality: { type: Number, required: true },
    district_municipality: { type: Number, required: true },
    local_administration_organization: { type: Number, required: true }
  },
  Populationdata: [populationdata],
  labordata : [labordata],
  Educationdata : [educationdata],
  Riskandsafedata : [riskandsafedata],
  Econamydata : [econamydata],
  Healtydata : [healtydata],
  Elderdata : [elderdata],
  Supportdata : [supportdata],
  Otherdata : [otherdata]
})

const ProvinceModel = mongoose.model('ProvinceModel',ProvinceSchema);
module.exports = ProvinceModel;