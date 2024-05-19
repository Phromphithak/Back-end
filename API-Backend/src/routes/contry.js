const express = require('express');
const router = express.Router();
const Country = require('../models/model_country');

router.get('/', async (req, res) => {
    try {
        const country_data = await Country.find();
        res.json(country_data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
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
            // sheet 7
            hospital_data: province.hospital_data.map(data => ({
                hospital_comunity: data.hospital_comunity,
                hospital_general: data.hospital_general,
                hospital_center: data.hospital_center,
                hospital_Subdistricthealthpromotion: data.hospital_Subdistricthealthpromotion,
                DistrictPublicHealthOffice: data.DistrictPublicHealthOffice,
                // sheet 8
                data_md_per_year: data.data_md_per_year.map(md => ({
                    doc_63: md.doc_63,
                    dent_63: md.dent_63,
                    phar_63: md.phar_63,
                    nurse_63: md.nurse_63,
                    doc_64: md.doc_64,
                    dent_64: md.dent_64,
                    phar_64: md.phar_64,
                    nurse_64: md.nurse_64,
                    doc_65: md.doc_65,
                    dent_65: md.dent_65,
                    phar_65: md.phar_65,
                    nurse_65: md.nurse_65,
                })),
                // sheet 9
                data_bad_per_year: data.data_bad_per_year.map(bad => ({
                    aob_63: bad.aob_63,
                    aob_64: bad.aob_64,
                    aob_65: bad.aob_65
                })),
                // sheet 10
                amount_volunteer: data.amount_volunteer.map(vol => ({
                    avt: vol.avt,
                    population_mid_year: vol.population_mid_year,
                    avt_per_people: vol.avt_per_people
                }))
            }))
        }))
    });

    try {
        await country_data.save();
        console.log('Country data inserted successfully!');
        res.status(201).json({ message: 'Country data inserted successfully!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
