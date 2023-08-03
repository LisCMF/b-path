const mongoose = require("mongoose");

const Schema = mongoose.Schema; // assign it to the schema method

// set a person schema
const bikePathSchema = new Schema({
  segment: String,
  scenaryRate : Number,
  safetyRate : Number,
  infrastructureRate : Number,
  numberOfrates: Number,
  arrOfUsers: Array,  
});

// create our model
const Bikepath = mongoose.model('bikepath', bikePathSchema);

// export model through module.exports
module.exports = Bikepath;