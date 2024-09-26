const router = require('express').Router();

const {
  getAllAppliedStudents,
  getAppliedStudent,
  addAppliedStudent,
  deleteAppliedStudent,
} = require('../controllers/applied.students.controller.js');

// get all AppliedStudents
router.get('/', getAllAppliedStudents);

// get a single AppliedStudents
router.get('/:id', getAppliedStudent);

// add new a AppliedStudents
router.post('/', addAppliedStudent);

// delete AppliedStudents
router.delete('/:id', deleteAppliedStudent);

module.exports = router;
