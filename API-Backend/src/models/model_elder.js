const mongoose = require('mongoose')
const { Schema } = mongoose;


// sheet 86
const EldersocialAssistanceSchema = new Schema({
    count : { type : Number }
})

//sheet 87
// Schema สำหรับการปรับสภาพที่อยู่อาศัยผู้สูงอายุ
const housingAdjustmentSchema = new Schema({
    year: { type: Number, required: true }, // ปีที่เก็บข้อมูล
    count: { type: Number, required: true }, // จำนวนครั้งที่มีการปรับสภาพที่อยู่อาศัยผู้สูงอายุ
});

// Schema สำหรับคลังปัญญาผู้สูงอายุ
const elderlyKnowledgeSchema = new Schema({
    count: { type: Number, required: true }, // จำนวนคนในคลังปัญญาผู้สูงอายุ
});

// Schema สำหรับศพอส.
const elderlyFuneralHomeSchema = new Schema({
    count: { type: Number, required: true }, // จำนวนศพที่มีการจัดการในศาสนสถานที่อสม.
});

// Schema สำหรับโรงเรียนผู้สูงอายุ
const elderlySchoolSchema = new Schema({
    count: { type: Number, required: true }, // จำนวนโรงเรียนผู้สูงอายุ
});

// sheet 83
const elderlyLoanSchema = new Schema({
    year: { type: Number, required: true }, // ปี
    numberOfBorrowers: { type: Number, required: true }, // จำนวนผู้กู้ยืม
  });

// sheet 78-79
const ElderlyPopulationSchema = new Schema({
    year: { type: Number, required: true },
    age_groups: {
      male_60_69: { type: Number, required: true },
      female_60_69: { type: Number, required: true },
      total_60_69: { type: Number, required: true },
      male_70_79: { type: Number, required: true },
      female_70_79: { type: Number, required: true },
      total_70_79: { type: Number, required: true },
      male_80_above: { type: Number, required: true },
      female_80_above: { type: Number, required: true },
      total_80_above: { type: Number, required: true },
      total_60_above: { type: Number, required: true },
    },
    total_population: { type: Number, required: true },
    elderly_population_ratio: { type: Number, required: true },
  });
  
// sheet 89
  const ElderlyAllowanceSchema = new Schema({
    year: Number, // ปี
    recipientCount: Number, // จำนวนผู้รับเงินเบี้ยยังชีพผู้สูงอายุ
});