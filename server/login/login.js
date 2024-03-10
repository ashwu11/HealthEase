
// helps us build web apps
const express = require('express');
// helps manage user sessions
const session = require('express-session');
// helps web server read information given to it
const bodyParser = require('body-parser');
// implements password hashing and encryption
const bcrypt = require('bcrypt');
// access mongodb package
const { MongoClient, ServerApiVersion } = require('mongodb');

// creates an Express app
const app = express();
// used for parsing data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
 secret: '0NeNODxT3Cx9eHPM',
 resave: true,
 saveUninitialized: true
}));

const port = 8000; // Replace with your desired port number

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

// Connect to MongoDB
client.connect(uri, (err, client) => {
    if (err) throw err;
    const db = client.db('login-page');
    const usersCollection = db.collection('users');
   // Login route
    app.post('/login', (req, res) => {
    const { email, password } = req.body;
   usersCollection.findOne({ email }, (err, user) => {
    if (err) throw err;
   // User not found
    if (!user) {
    return res.status(401).send('Invalid email or password');
    }
   // Compare the provided password with the hashed password stored in the database
    bcrypt.compare(password, user.password, (err, result) => {
    if (err) throw err;
   if (result) {
    // Store user data in session
    req.session.user = user;
    res.redirect('/dashboard'); // Redirect to the dashboard page after successful login
    } else {
    res.status(401).send('Invalid email or password');
    }
    });
    });
    });
   // Start the server
    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
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
