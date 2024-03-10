const Tesseract = require('tesseract.js');
const express = require('express');
const cors = require('cors');
const port = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-data', (req, res) => {
    const receivedData = req.body.data;
    const imageElement = new Image();
    imageElement.src = receivedData;

    console.log('Received data:', imageElement);
  
    // Process the data or store it in a database as needed
    Tesseract.recognize(
        imageElement,
        'eng' // Language for text recognition
    ).then(({ data }) => {
        console.log(data.text); // Accessing recognized text
        res.json({ recognizedText: data.text });
    }).catch(err => {
        console.error('Error:', err);
        res.status(500).json({ error: 'Error processing image' }); 
    });
    
  });

app.listen(port, () => {
    console.log('Server is running on port 8080');
})