const router = require('express').Router();

const {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent,
} = require('../controllers/students.controller.js');

// get all students
router.get('/', getStudents);

// get a single student
router.get('/:id', getStudent);

// add a new student
router.post('/', addStudent);

// delete a student
router.delete('/:id', deleteStudent);

// update a student
router.patch('/:id', updateStudent);

module.exports = router;
