// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb+srv://intermc2546:cgQHXcTNYUqq3wY1@data-report.rbszuz1.mongodb.net/?retryWrites=true&w=majority&appName=Data-Report', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
