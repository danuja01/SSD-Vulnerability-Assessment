const AppliedStud = require('../models/applied.students.model.js');

//get all AppliedStudents

const getAllAppliedStudents = async (req, res) => {
  const appliedStudents = await AppliedStud.find()
    .populate('student')
    .populate({ path: 'degree', select: 'degree_name z_score' });

  if (!appliedStudents) {
    return res.status(404).json({ message: 'No any applied students found' });
  } else {
    return res.status(200).json(appliedStudents);
  }
};

//get / serach a single AppliedStudent

const getAppliedStudent = async (req, res) => {
  const { id } = req.params;

  const AppliedStudent = await AppliedStud.findById({ _id: id })
    .populate('degree')
    .populate('student');

  if (!AppliedStudent) {
    return res.status(404).json({ message: 'No student found' });
  } else {
    return res.status(200).json(AppliedStudent);
  }
};

//add a new AppliedStudent

const addAppliedStudent = async (req, res) => {
  const { degree, student } = req.body;

  const newAppliedStudent = new AppliedStud({
    degree,
    student,
  });

  try {
    await newAppliedStudent.save();
    return res.status(201).json(newAppliedStudent);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

//delete a AppliedStudents

const deleteAppliedStudent = async (req, res) => {
  const { id } = req.params;

  const AppliedStudent = await AppliedStud.findById({ _id: id });

  if (!AppliedStudent) {
    return res.status(404).json({ message: 'No student found' });
  } else {
    await AppliedStudent.remove();
    return res
      .status(200)
      .json({ message: 'Applied Student deleted successfully' });
  }
};

module.exports = {
  getAllAppliedStudents,
  getAppliedStudent,
  addAppliedStudent,
  deleteAppliedStudent,
};
