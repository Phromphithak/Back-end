const express = require('express');
const rounter = express.Router();
const Country = require('../models/model_contry')

rounter.get('/', async(req, res)=> {
    try {
        const country_data = await Country.find();
        res.json(country_data);
    }catch(err){
        res.status(500).json({message : err.message});
    }
});

rounter.post('/', async(req,res)=>{
    const country_data = new Country({
        country: req.body.country,
        administrative_region: req.body.administrative_region,
        region: req.body.region,
        country_code: req.body.country_code,
        database_year: req.body.database_year,
        provinces: req.body.provinces.map(province => ({
            province_code: province.province_code,
            province_name: province.province_name,
            administrative_region: province.administrative_region,
            base_year: province.base_year,
            area: province.area,
            population_2566: province.population_2566,
            population_density: province.population_density,
            number_households: province.number_households,
            province_municipality: province.province_municipality,
            city_municipality: province.city_municipality,
            town_municipality: province.town_municipality,
            district_municipality: province.district_municipality,
            local_administration_organization: province.local_administration_organization,
            population_data: province.population_data.map(data => ({
                age_group: data.age_group,
                gender: data.gender,
                population: data.population,
                percentage: data.percentage
            }))
        }))
    });
    
    try{
        const create_country_data = new Country(country_data);
        await create_country_data.save();
        console.log('Country data inserted successfully!');
        res.status(201).json({ message: 'ok.sendit' });

    }catch (err) {
        res.status(400).json({ message: err.message });
    }
})


module.exports = rounter;