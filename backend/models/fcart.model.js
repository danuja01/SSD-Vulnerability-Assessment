const mongoose = require('mongoose');
//model 
const CartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
 total: {
    type: Number,
  },
  

 
});

module.exports = mongoose.model('FoodItemCart', CartSchema);