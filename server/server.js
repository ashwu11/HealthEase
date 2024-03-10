// require allows us to use external modules
// express is a web application framework used to create the backend application
const express = require("express");
// cors is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains can have access
const cors = require("cors");
// axios helps make requests 
const axios = require("axios");
// allows us to use cohere ai api
const { CohereClient } = require("cohere-ai");

// creating a new express app
const app = express();
const port = 8000;

// creating a new cohere object connected with the my key
const cohere = new CohereClient({
  token: "tf8rA4W0fA88BwfhMjwA1NpI49vA64kUcWcAlWWV",
});


// adds different functions from cors and express to the Express app 
app.use(cors());
app.use(express.json());

// get user input for a question
const readline = require('readline');

// creates an interface 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

app.post('/send-data', (req, res) => {
    const receivedData = req.body.data;
    console.log('Received data:', receivedData);
  
    // Process the data or store it in a database as needed

    // specifications for the cohere ai 
    const model = "command";
    const temperature = 0.9;

    // Make a POST request to the Cohere Chat AI API
    axios.post('https://api.cohere.ai/chat', {
        message: receivedData,
        model: model,
        temperature: temperature
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tf8rA4W0fA88BwfhMjwA1NpI49vA64kUcWcAlWWV' // Replace YOUR_API_KEY with your actual API key
        }
    })
    .then((response) => {
        // Handle the response
        const answer = response.data.text;
        res.send(answer);
        console.log(answer); // Log the response or use it as needed
    })
    .catch((error) => {
        // Handle errors
        console.error('Error:', error);
    });
    
  });
  

app.listen(port, () => {
  console.log(`Server is running on port 8000.`);
});