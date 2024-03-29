const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Destination directory for uploaded files

// Define a route to handle file uploads
app.post('/upload', upload.single('csvFile'), (req, res) => {
    const filePath = req.file.path; // Path to the uploaded file
    const fileName = req.body.fileName; // File name provided by the user

    // Create an array to store CSV data
    const results = [];

    // Read the CSV file, parse its content, and push it to the results array
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Respond with a JSON object containing the file name and parsed CSV data
            res.json({ fileName, data: results });

            // Remove the uploaded file from the server's file system
            fs.unlinkSync(filePath);
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
