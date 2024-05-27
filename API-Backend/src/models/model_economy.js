const mongoose = require('mongoose')
const { Schema } = mongoose;

const GDPPerCapitaSchema = new Schema({
  year: { type: Number, required: true },
  gdp_per_capita: {
    '58': { type: Number, required: true },
    '59': { type: Number, required: true },
    '60': { type: Number, required: true },
    '61': { type: Number, required: true },
    '62': { type: Number, required: true },
    '63': { type: Number, required: true },
    '64': { type: Number, required: true }
  },
  growth_63_64: { type: Number, required: true }
});
const DebtSchema = new Schema({
  year: { type: Number, required: true },
  total_debt: {
    '60': { type: Number, required: true },
    '62': { type: Number, required: true },
    '64': { type: Number, required: true }
  },
  categories: {
    for_household_expenses: { type: Number, required: true },
    for_non_agricultural_business: { type: Number, required: true },
    for_agricultural_business: { type: Number, required: true },
    for_education: { type: Number, required: true },
    for_house_and_land: { type: Number, required: true },
    others: { type: Number, required: true }
  }
});
const InequalityCoefficientSchema = new Schema({
  year: { type: Number, required: true },
  coefficient: {
    '62': { type: Number, required: true },
    '63': { type: Number, required: true },
    '64': { type: Number, required: true },
    '65': { type: Number, required: true }
  }
});
const AmountVolunteerSchema = new Schema({
  year: { type: Number, required: true },
  avt: { type: Number, required: true },
  population_mid_year: { type: Number, required: true },
  avt_per_people: { type: Number, required: true }
})
const ArticleSchema = new Schema({
  article_33: { type: Number, required: true },
  article_39: { type: Number, required: true },
  article_40: { type: Number, required: true }
});

const econamymodel = new Schema({
  GDPPerCapita: [GDPPerCapitaSchema],
  Debt: [DebtSchema],
  InequalityCoefficient: [InequalityCoefficientSchema],
  AmountVolunteer: [AmountVolunteerSchema],
  Article: [ArticleSchema]
})

module.exports = econamymodel;