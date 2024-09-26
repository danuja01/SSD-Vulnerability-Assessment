const router = require('express').Router();

const {
  getAllSelectedStudents,
  addSelectedStudent,
} = require('../controllers/selected.students.controller.js');

// get all selected students
router.get('/', getAllSelectedStudents);

// add new selected student
router.post('/', addSelectedStudent);

module.exports = router;
