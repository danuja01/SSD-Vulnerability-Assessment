import React, { useState, useEffect } from 'react';
import axois from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import AdminName from './AdminName';
import AdminNav from './AdminNav';
import V12 from '../images/V12.jpg';

const Report2 = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Attendance, setAttendance] = useState([]);
  useEffect(() => {
    function getAttendance() {
      axois
        .get('http://localhost:4000/attendance/getM')
        .then((res) => {
          console.log(res.data);
          setAttendance(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAttendance();
  }, []);
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <div style={{ backgroundImage: `url(${V12})`, backgroundSize: 'container' }}>
          <br></br>
          <br></br>
          <br></br>
          <div className='row' >
            <div className='col-md-10'></div>

            <div  class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
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
          <br></br>
          <center>
            <h1 className='text-2xl'>All Attednace Report</h1>
          <table className='table table-hover' style={{ marginTop: '40px' }} border="2">
            <thead>
              <tr>
                <th scope='col'>Employee ID</th>
                <th scope='col'>Date & Time</th>
                {/* <th scope="col">Vehicle Status</th>
                     <th scope="col">Driver Status</th> */}
              </tr>
            </thead>

            <tbody>
              {Attendance.map((e, i) => (
                <tr>
                  <td>{e.employee_id}</td>
                  <td>{e.date}</td>

                  {/* <td>{e.VehicleStatus}</td>
                             <td>{e.DriverStatus}</td> */}

                  {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
                </tr>
              ))}
            </tbody>
          </table></center>
        <br></br></div>
      </div>
    </section>
  );
};
export default Report2;
