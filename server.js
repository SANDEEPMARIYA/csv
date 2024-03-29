const express = require('express');
const csvParser = require('csv-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint for uploading CSV files
app.post('/upload', (req, res) => {
    // Handle file upload here
    // Parse the CSV file and save it
});

// Endpoint for listing uploaded CSV files
app.get('/files', (req, res) => {
    // Retrieve list of uploaded files and send as JSON
});

// Endpoint for fetching CSV data
app.get('/data/:filename', (req, res) => {
    const filename = req.params.filename;
    // Read the CSV file and send data as JSON
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const multer = require('multer');


const upload = multer({
    // Set limits for file size (in bytes)
    limits: {
        fileSize: 10 * 1024 * 1024 // 10 MB (adjust as needed)
    }
});