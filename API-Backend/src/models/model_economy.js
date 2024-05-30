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
const AverageMonthlyIncomeSchema = new Schema({
  income: {
      '60': { type: Number, required: true },
      '62': { type: Number, required: true },
      '64': { type: Number, required: true }
  }
});
const DebtSchema = new Schema({
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
  coefficient: {
    '62': { type: Number, required: true },
    '63': { type: Number, required: true },
    '64': { type: Number, required: true },
    '65': { type: Number, required: true }
  }
});


const econamymodel = new Schema({
  GDPPerCapita: [GDPPerCapitaSchema],
  AverageMonthlyIncome: [AverageMonthlyIncomeSchema],
  Debt: [DebtSchema],
  InequalityCoefficient: [InequalityCoefficientSchema]
})

module.exports = econamymodel;