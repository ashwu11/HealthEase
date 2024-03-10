const Tesseract = require('tesseract.js');

Tesseract.recognize(
    "image.png",
    'eng' // Language for text recognition
).then(({ data }) => {
    console.log(data.text); // Accessing recognized text
}).catch(err => {
    console.error('Error:', err);
});