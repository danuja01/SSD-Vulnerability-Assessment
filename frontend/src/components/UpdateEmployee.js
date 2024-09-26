import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import V5 from '../images/V5.jpg';
import AdminName from './AdminName';
import AdminNav from './AdminNav';
import Header from './Header';

function UpdateEmployee() {
  const [name, setName] = useState('');
  const [employee_id, setEmployeeID] = useState('');
  const [job_type, setJobType] = useState('');
  const [User_name, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [job_title, setJobTitle] = useState('');
  const [age, setAge] = useState('');
  const [Education, setEducation] = useState('');
  const [Certification, setCertification] = useState('');

  const { id } = useParams();

  const getEmployee = () => {
    axios
      .get('http://localhost:4000/employee/get/' + id)
      .then((res) => {
        const updateEmployee = {
          name: res.data.name,
          employee_id: res.data.employee_id,
          job_type: res.data.job_type,
          User_name: res.data.User_name,
          password: res.data.password,
          job_title: res.data.job_title,
          age: res.data.age,
          Education: res.data.Education,
          Certification: res.data.Certification,
        };

        // console.log(res.data);
        setName(updateEmployee.name);
        setEmployeeID(updateEmployee.employee_id);
        setJobType(updateEmployee.job_type);
        setUserName(updateEmployee.User_name);
        setPassword(updateEmployee.password);
        setJobTitle(updateEmployee.job_title);
        setAge(updateEmployee.age);
        setEducation(updateEmployee.Education);
        setCertification(updateEmployee.Certification);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => getEmployee(), []);

  return (
    <div style={{ backgroundImage: `url(${V5})`, backgroundSize: 'container' }}>
      {' '}
      <br></br>
      <Header />
      <div className='form-style-5'>
        <h1>Update Employee</h1> <br></br>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const newEmployee = {
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

            axios
              .put('http://localhost:4000/employee/update/' + id, newEmployee)
              .then(() => {
                alert('Employee updated');
              })
              .catch((err) => {
                alert(err);
              });
          }}
        >
          <div>
            <label for='name'>Employee Name</label>
            <input
              type='text'
              value={name}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Enter Employee Name '
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className='container'>
            <label for='employee_id'>Employee ID</label>
            <input
              type='text'
              value={employee_id}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Enter Employee ID '
              onChange={(e) => {
                setEmployeeID(e.target.value);
              }}
            />
          </div>

          <div className='container'>
            <label for='job_type'>Job Type</label>
            <input
              type='text'
              value={job_type}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Enter type of the job'
              onChange={(e) => {
                setJobType(e.target.value);
              }}
            />
          </div>

          <div className='container'>
            <label for='User_name'>User Name</label>
            <input
              type='text'
              value={User_name}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Enter the user name'
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <div className='container'>
            <label for='password'>Password</label>
            <input
              type='text'
              value={password}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Enter the password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className='container'>
            <label for='job_title'>Job Title </label>

            <select
              value={job_title}
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
              className='form-control'
            >
              <option value='acadmic'> Select One</option>
              <option value='acadmic'> Acadamic</option>
              <option value='non-acadamic'> Non-Acadmic</option>
            </select>
          </div>

          <div className='container'>
            <label for='age'>Age</label>
            <input
              type='number'
              value={age}
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Enter the Age'
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <div className='container'>
            <label for='Education'>Education</label>
            <input
              type='text'
              className='form-control'
              value={Education}
              id='exampleInputPassword1'
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />
          </div>

          <div className='container'>
            <label for='Certification'>Certification</label>
            <input
              type='text'
              className='form-control'
              value={Certification}
              id='exampleInputPassword1'
              onChange={(e) => {
                setCertification(e.target.value);
              }}
            />
          </div>

          <center>
            <button
              type='submit'
              class='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
            >
              update
            </button>
          </center>
        </form>
      </div>
      <br></br>{' '}
    </div>
  );
}

export default UpdateEmployee;
