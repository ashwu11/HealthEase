// load environment variables
require('dotenv').config();

// file system operations
const fs = require('fs');
// make http requests
const axios = require('axios');
const path = require('path');

async function transcribe(file) {
    const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', {
        file,
        model: 'whisper-1'
    }, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer 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'
        }
    });
    return response.data.text;

}

// Specify the directory path
const directoryPath = '/path/to/directory';


// Read the file names from the directory
async function getNewest(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        // Get information about each file
        const fileStats = files.map(fileName => {
            return {
                name: fileName,
                createdAt: fs.statSync(path.join(directoryPath, fileName)).birthtimeMs
            };
        });
        // Find the newest file based on creation time
        const newestFile = fileStats.reduce((acc, curr) => {
            return acc.createdAt > curr.createdAt ? acc : curr;
        });
        // Process the newest file
        const filename = newestFile;

        return filename;
    });
}

async function main() {
    const filename = getNewest('recorder/uploads');
    const file = fs.createReadStream(filename);
    const transcript = await transcribe(file);

    console.log(transcript);
}

main();
