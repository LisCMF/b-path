// import dependecies
const express = require('express'); // node framework
const mongoose = require('mongoose'); // imports the mongoose library
require("dotenv").config() // env varible that has the data

const router = express.Router();
const app = express(); // create a express app 

app.use(express.urlencoded({ extended: true })); // to research ?????????????????????????????????????
app.use(express.json()); // ensure that we can use a body went doing post request

const BpathController = require('./controllers/BpathController'); // with middleware to use as methods e.g. body parse
const { connected } = require('process');

const PORT = 3000; // backend port were poxy redirect requests
const uri = process.env.MONGODB_CONNECTION_STRING;


mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => console.log('mongoose connected')).catch((err) => console.log('mongoose.connect or uri ->', err)); // invoke the connect method to connect to the data base

const connection = mongoose.connection;

// create a bikePath segment in the db
app.post('/api/addRate', BpathController.addRate, (req, res, next) => {
  return res.status(200).json(res.locals.newPath);
});

app.post('/api/updateRate', BpathController.updateRate, (req, res, next) => {
  return res.status(200).json(res.locals.newPath);
});

app.post('/api/deleteRate', BpathController.deleteRate, (req, res, next) => {
  return res.status(200).json(res.locals.newPath);
});

app.post('/api/sumary', BpathController.sumary, (req, res, next) => {
    return res.status(200).json(res.locals.sumObj);
});

/* set a person schema
const bikePathSchema = new Schema({
    segment: String,
    scenaryRate : Number,
    safetyRate : Number,
    infrastructureRate : Number,
    numberOfrates: Number,
    arrOfUsers: String,  
  });
*/



connection.once('open', () => { //invoke the cb one time when the connection is made
  console.log('MongoDB database connected');
});


app.listen(PORT, () => console.log(`Server App Listening at http://localhost${PORT}`));




