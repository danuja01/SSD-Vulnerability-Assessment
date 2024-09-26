const mongoose = require('mongoose');

const degreeSchema = new mongoose.Schema({
  degree_name: {
    type: String,
    required: true,
  },
  z_score: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  streams: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Degree', degreeSchema);
