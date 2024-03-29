// csvModel.js

// Placeholder model for CSV file
class CSVFile {
    constructor(filename, path) {
        this.filename = filename;
        this.path = path;
    }

    // Example method (not used in this application)
    getFullPath() {
        return `${this.path}/${this.filename}`;
    }
}

module.exports = CSVFile;
