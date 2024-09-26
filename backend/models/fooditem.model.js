const mongoose = require('mongoose');
//model 
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },

  type: {
    type: String,
  },
  

 
});

module.exports = mongoose.model('FoodItem', foodSchema);