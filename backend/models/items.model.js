const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const itemSchema = new Schema({
  invoice_No: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  item_Name: {
    type: String,
    required: true,
  },

  quantity: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
