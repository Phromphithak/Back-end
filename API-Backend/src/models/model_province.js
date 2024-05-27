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


const ProvinceSchema = new Schema({
  Populationdata: [populationdata],
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