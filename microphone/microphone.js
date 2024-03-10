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

async function main() {
    const filePath = path.join(__dirname, '..', 'recorder', 'recording.mp3');
    const file = fs.createReadStream(filePath);
    const transcript = await transcribe(file);

    console.log(transcript);
}

main();
