const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  employee_id: {
    type: String,
    required: true,
  },
  job_type: {
    type: String,
    required: true,
  },
  User_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
  },
  age: {
    type: Number,
  },
  Education: {
    type: String,
  },
  Certification: {
    type: String,
  },
});

const Employee = mongoose.model('Employee_E1', employeeSchema);
module.exports = Employee;
