const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Country = require('../models/model_country');

router.use(bodyParser.json());

// GET all country data
router.get('/', async (req, res) => {
  try {
    const country_data = await Country.find();
    res.json(country_data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET specific province data by province name
router.get('/province/:province_name', async (req, res) => {
  try {
    const country_data = await Country.findOne({ "provinces.province_name": req.params.province_name });
    if (!country_data) {
      return res.status(404).json({ message: 'Province not found' });
    }
    const province = country_data.provinces.find(province => province.province_name === req.params.province_name);
    res.json(province);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new country data
router.post('/', async (req, res) => {
  try {
    const country = new Country(req.body);
    await country.save();
    console.log('Country data inserted successfully!');
    res.status(201).json({ message: 'Country data inserted successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
