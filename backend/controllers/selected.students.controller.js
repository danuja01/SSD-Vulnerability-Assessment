const SelectedStudent = require('../models/selected.students.model');

//get all SelectedStudents
const getAllSelectedStudents = async (req, res) => {
  const selectedStudents = await SelectedStudent.find()
    .populate('student')
    .populate({ path: 'degree', select: 'degree_name z_score' });

  if (!SelectedStudent) {
    res.status(404).json({ message: 'No any selected students found' });
  } else {
    res.status(200).json(selectedStudents);
  }
};

//add a new SelectedStudent

const addSelectedStudent = async (req, res) => {
  const { degree, student } = req.body;

  const newSelectedStudent = new SelectedStudent({
    degree,
    student,
  });

  try {
    await newSelectedStudent.save();
    res.status(201).json(newSelectedStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getAllSelectedStudents, addSelectedStudent };
