import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import V3 from "../images/V3.jpg";
import V10 from '../images/V10.jpg';
import { Link } from 'react-router-dom';
import AdminName from './AdminName';
import AdminNav from './AdminNav';
import Header from './Header';

export default function AllEmployee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    function getEmployee() {
      axios
        .get('http://localhost:4000/employee/get')
        .then((res) => {
          setEmployees(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployee();
  }, [employees]);

  const deleteDataC = (e) => {
    var result = window.confirm('Are you sure?');
    if (result == true) {
      axios
        .delete(`http://localhost:4000/employee/delete/${e._id}`)
        .then((res) => {})
        .catch((e) => {
          alert(e);
        });
    } else {
      e.preventDefault();
    }
  };
  //serach
  const [serQuary, setSerQuary] = useState('');

  function searchEmployee(event) {
    setSerQuary(event.target.value);
  }

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <Header />
        <div style={{ backgroundImage: `url(${V10})`, backgroundSize: '100%' }}>
          {' '}
          <br></br>
          <table width={'140%'}>
            <tr>
              <td>
                <Link to='/admin/Report'>
                  <button
                    style={{ align: 'right', margin: '1%' }}
                    type='button2'
                    class='inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    {' '}
                    Generate Employees Report{' '}
                  </button>
                </Link>
              </td>

              <td>
                <div style={{ width: '80%' }}>
                  <input
                    onChange={searchEmployee}
                    placeholder='Search.....'
                    style={{ float: 'left' }}
                  />
                </div>{' '}
              </td>
              <br></br>
              <br></br>
            </tr>
          </table>
          <center>
            <br></br>
            <h2 className='text-5xl'>All Employees</h2>
          </center>
          <br></br>
          {employees
            .filter(
              (e) =>
                e.employee_id.toLowerCase().includes(serQuary) ||
                e.employee_id.includes(serQuary) ||
                e.name.toLowerCase().includes(serQuary) ||
                e.name.includes(serQuary) ||
                e.job_type.toLowerCase().includes(serQuary) ||
                e.job_type.includes(serQuary) ||
                e.job_title.toLowerCase().includes(serQuary) ||
                e.job_title.includes(serQuary)
            )

            .map((empolyee) => (
              <div>
                <br></br>
                <table
                  width={'80%'}
                  border={6}
                  align='center'
                  style={{ backgroundColor: 'white' }}
                >
                  <tr>
                    <center>
                      <th> Employee ID </th>
                    </center>
                    <th style={{ backgroundColor: '#FFE5D9' }}>
                      {' '}
                      Employee Name{' '}
                    </th>
                    <th> Job Type </th>
                    <th style={{ backgroundColor: '#FFE5D9' }}> User Name </th>
                    <th> Password </th>
                    <th style={{ backgroundColor: '#FFE5D9' }}> Job Title </th>
                    <th> Age </th>
                    <th style={{ backgroundColor: '#FFE5D9' }}> Education </th>
                    <th> Certification </th>
                  </tr>

                  <tr>
                    <td>{empolyee.employee_id}</td>
                    <td style={{ backgroundColor: '#FFE5D9' }}>
                      {empolyee.name}
                    </td>
                    <td>{empolyee.job_type}</td>
                    <td style={{ backgroundColor: '#FFE5D9' }}>
                      {empolyee.User_name}
                    </td>
                    <td>{empolyee.password}</td>
                    <td style={{ backgroundColor: '#FFE5D9' }}>
                      {empolyee.job_title}
                    </td>
                    <td>{empolyee.age}</td>
                    <td style={{ backgroundColor: '#FFE5D9' }}>
                      {empolyee.Education}
                    </td>
                    <td>{empolyee.Certification}</td>
                  </tr>
                </table>
                <center>
                  <Link
                    to={'/admin/update-employee/' + empolyee._id}
                    class='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Update
                  </Link>
                  <button
                    class='inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                    style={{
                      padding: 10,
                      margin: 10,
                      backgroundColor: 'lightgrey',
                    }}
                    onClick={() => {
                      deleteDataC(empolyee);
                    }}
                  >
                    Delete
                  </button>
                </center>
              </div>
            ))}
          <div>
            <center></center>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
}
