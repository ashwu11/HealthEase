
// helps us build web apps
const express = require('express');
// helps manage user sessions
const session = require('express-session');
// helps web server read information given to it
const bodyParser = require('body-parser');
// implements password hashing and encryption
const bcrypt = require('bcrypt');

// creates an Express app
const app = express();
// used for parsing data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
 secret: 'your-secret-key',
 resave: true,
 saveUninitialized: true
}));

const port = 3000; // Replace with your desired port number

// creating database with mongodb
// access mongodb package
const { MongoClient, ServerApiVersion } = require('mongodb');
// url to connect to database
const uri = "mongodb+srv://kzhang1223:0NeNODxT3Cx9eHPM@userinfo.w3nyzp4.mongodb.net/?retryWrites=true&w=majority&appName=userinfo";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
