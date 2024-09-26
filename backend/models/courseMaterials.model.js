const mongoose = require('mongoose');

const cmSchema = new mongoose.Schema({
  module_name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
  notice: {
    type: String,
  },
});

module.exports = mongoose.model('CourseMaterial', cmSchema);
