const mongoose = require("mongoose");

//*********Schema******** */
const Schema = mongoose.Schema;
const SchemaProfile = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  town: {
    type: String,
    required: false,
    
  },
  occuption: {
    type: String,
    required: false,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  // favourites: {
  //   type: [Books],
  // },
});

// Model
const profile = mongoose.model("profile", SchemaProfile);

module.exports = profile;