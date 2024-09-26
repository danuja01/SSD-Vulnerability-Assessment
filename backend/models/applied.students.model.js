const mongoose = require('mongoose');

const appliedStudents = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
  degree: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Degree',
    },
  ],
  applied_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AppliedStudent', appliedStudents);
