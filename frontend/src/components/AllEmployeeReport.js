import React, { useState, useEffect } from 'react';
import axois from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import V4 from '../images/V4.png';
import AdminNav from './AdminNav';
import AdminName from './AdminName';

const AllEmployeeReport = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Employee, setEmployee] = useState([]);
  useEffect(() => {
    function getEmployee() {
      axois
        .get('http://localhost:4000/employee/get')
        .then((res) => {
          console.log(res.data);
          setEmployee(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployee();
  }, []);
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <div
          style={{ backgroundImage: `url(${V4})`, backgroundSize: 'container' }}
        >
          <br></br>
          <div className='row'>
            <div className='col-md-10'></div>

            <div class='inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out'>
              <Button
                variant='primary'
                onClick={() => {
                  window.print();
                }}
              >
                Print Report
              </Button>
            </div>
          </div>
          <center>
            <h1
              className='text-2xl'
              style={{ backgroundColor: 'white', width: '50%' }}
            >
              All Employe Details{' '}
            </h1>
            <table
              className='table table-hover'
              style={{ marginTop: '40px', backgroundColor: 'white' }}
            >
              <thead>
                <tr>
                  <th scope='col'>Employee ID</th>
                  <th scope='col'>Employee Name</th>
                  <th scope='col'>Job Type</th>
                  <th scope='col'>User Name</th>
                  <th scope='col'>Password</th>
                  <th scope='col'>Job Title</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Education</th>
                  <th scope='col'>Certification</th>
                  {/* <th scope="col">Vehicle Status</th>
                     <th scope="col">Driver Status</th> */}
                </tr>
              </thead>

              <tbody>
                {Employee.map((e, i) => (
                  <tr>
                    <td>{e.employee_id}</td>
                    <td>{e.name}</td>
                    <td>{e.job_type}</td>
                    <td>{e.User_name}</td>
                    <td>{e.password}</td>
                    <td>{e.job_title}</td>
                    <td>{e.age}</td>
                    <td>{e.Education}</td>
                    <td>{e.Certification}</td>
                    {/* <td>{e.VehicleStatus}</td>
                             <td>{e.DriverStatus}</td> */}

                    {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
                  </tr>
                ))}
              </tbody>
            </table>{' '}
          </center>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
};
export default AllEmployeeReport;
