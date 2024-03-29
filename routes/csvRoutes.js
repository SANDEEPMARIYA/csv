// csvRoutes.js
const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

// Route for uploading CSV files
router.post('/upload', csvController.uploadFile);

// Route for listing uploaded files
router.get('/files', csvController.listFiles);

// Route for fetching CSV data
router.get('/data/:filename', csvController.getCSVData);

module.exports = router;
