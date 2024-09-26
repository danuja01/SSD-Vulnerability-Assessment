const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  employee_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const attendace = mongoose.model('attendance', attendanceSchema);
module.exports = attendace;
