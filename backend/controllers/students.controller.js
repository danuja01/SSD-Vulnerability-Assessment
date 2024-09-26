const Student = require('../models/students.model.js');

//get all Students

const getStudents = async (req, res) => {
  const students = await Student.find();

  if (!students) {
    return res.status(404).json({ message: 'No any available students found' });
  } else {
    return res.status(200).json(students);
  }
};

//get / serach a single Student

const getStudent = async (req, res) => {
  const { id } = req.params;

  const student = await Student.findById({ _id: id });

  if (!student) {
    return res.status(404).json({ message: 'No student found' });
  } else {
    return res.status(200).json(student);
  }
};

//add new Student

const addStudent = async (req, res) => {
  const { nic, student_name, index_number, z_score, subject_stream, email } =
    req.body;

  try {
    const student = await Student.create({
      nic,
      student_name,
      index_number,
      z_score,
      subject_stream,
      email,
    });

    return res.status(200).json(student);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

//delete a Student

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  const student = await Student.findOneAndDelete({ _id: id });

  if (!student) {
    return res.status(400).json({ error: 'No such student' });
  } else {
    return res.status(200).json({ message: 'Student deleted successfully' });
  }
};

//update a Student

const updateStudent = async (req, res) => {
  const { id } = req.params;

  const student = await Student.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!student) {
    return res.status(400).json({ error: 'No such student' });
  } else {
    return res.status(200).json(student);
  }
};

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent,
};
