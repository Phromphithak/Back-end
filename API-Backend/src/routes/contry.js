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
            // sheet 6
            population_data: province.population_data.map(data => ({
                age_group: data.age_group,
                gender: data.gender,
                population: data.population,
                percentage: data.percentage
            })),
            // sheet7
            hospital_data : province.hospital_data.map(data => ({
                hospital_comunity : data.hospital_comunity,
                hospital_general : data.hospital_general,
                hospital_center : data.hospital_center,
                hospital_Subdistricthealthpromotion : data.hospital_Subdistricthealthpromotion,
                DistrictPublicHealthOffice : data.DistrictPublicHealthOffice,
                // sheet 8
                data_md_per_year : data.data_md_per_year.map(data => ({
                    doc_63 : data.doc_63,
                    dent_63 : data.dent_63,
                    phar_63 : data.phar_63,
                    nurse_64 : data.nurse_63,
                    doc_64 : data.doc_64,
                    dent_64 : data.dent_64,
                    phar_64 : data.phar_64,
                    nurse_64 : data.nurse_64,
                    doc_65 : data.doc_65,
                    dent_65 : data.dent_65,
                    phar_65 : data.phar_65,
                    nurse_65 : data.nurse_65,
                }))

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