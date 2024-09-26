const router = require('express').Router();
let Employee = require('../models/employee');

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const employee_id = req.body.employee_id;
  const job_type = req.body.job_type;
  const User_name = req.body.User_name;
  const password = req.body.password;
  const job_title = req.body.job_title;
  const age = req.body.age;
  const Education = req.body.Education;
  const Certification = req.body.Certification;

  const newEmployee = new Employee({
    name,
    employee_id,
    job_type,
    User_name,
    password,
    job_title,
    age,
    Education,
    Certification,
  });

  newEmployee
    .save()
    .then(() => {
      res.json('Employee Added');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route('/update/:id').put(async (req, res) => {
  let userId = req.params.id;
  const {
    name,
    employee_id,
    job_type,
    User_name,
    password,
    job_title,
    age,
    Education,
    Certification,
  } = req.body;

  const updateEmployee = {
    name,
    employee_id,
    job_type,
    User_name,
    password,
    job_title,
    age,
    Education,
    Certification,
  };

  const update = await Employee.findByIdAndUpdate(userId, updateEmployee)
    .then(() => {
      res.status(200).send({ status: 'User Updated' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: 'Error with updation data' });
    });
});

router.route('/delete/:id').delete(async (req, res) => {
  let userId = req.params.id;

  await Employee.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: 'User deleted' });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: 'Error with delete user', error: err.message });
    });
});

router.route('/get/:id').get(async (req, res) => {
  let userId = req.params.id;

  const user = await Employee.findById(userId)
    .then((Employee) => {
      res.json(Employee);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: 'Error with finding data', error: err.message });
    });
});
/*
router.route("/gets/:name").get(async (req,res) => {
    let userId = req.params.name;
    
    const user = await Employee.getAll(userId)
    .then((Employee) => {
        res.json(Employee);
    })
    .catch((err) => {
        res.status(500).send({status: "Error with finding data", error: err.message});
    });
})

router.route("/serach/:keyword").get(async (req, res) => {
    let keyword = req.params.keyword;
    await Employee.find({ name: keyword })
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with search income", error: err.message });
      });
  });*/

router.route('/get').get((req, res) => {
  Employee.find()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
