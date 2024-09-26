import axios from 'axios';
import React, { useState, useEffect } from 'react';
import V12 from '../images/V12.jpg';
import { Link } from 'react-router-dom';
import AdminName from './AdminName';
import AdminNav from './AdminNav';
import Header from './Header';

export default function AllAttendance() {
  const [attendances, setAttendance] = useState([]);

  useEffect(() => {
    function getAttendance() {
      axios
        .get('http://localhost:4000/attendance/getM')
        .then((res) => {
          setAttendance(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAttendance();
  }, [attendances]);

  const deleteDataC = (e) => {
    var result = window.confirm('Are you sure?');
    if (result == true) {
      axios
        .delete(`http://localhost:4000/attendance/delete/${e._id}`)
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

  function searchIncome(event) {
    setSerQuary(event.target.value);
  }

  console.log(serQuary);

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <Header />

        <div
          style={{
            backgroundImage: `url(${V12})`,
            backgroundSize: 'container',
          }}
        >
          {' '}
          <br></br>
          <table width={'170%'}>
            {' '}
            <tr>
              <td>
                <Link to='/admin/Report2'>
                  <button
                    type='button2'
                    style={{ margin: '1%' }}
                    class='inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    {' '}
                    Generate Report
                  </button>
                </Link>
              </td>
              <td>
                <div style={{ width: '80%' }}>
                  <input
                    onChange={searchIncome}
                    placeholder='Search.....'
                    style={{ float: 'left' }}
                  />
                  <br></br>
                  <br></br>
                </div>
              </td>
            </tr>
          </table>
          <center>
            <h2 className='text-2xl'>ALL ATTENDANCE </h2>
          </center>
          <br></br>
          {attendances
            .filter(
              (e) =>
                e.employee_id.includes(serQuary) ||
                e.employee_id.toLowerCase().includes(serQuary) ||
                e.date.toLowerCase().includes(serQuary)
            )
            .map((attendance) => (
              <div>
                <center>
                  <table border={1} width='60%'>
                    <tr>
                      <td>{attendance.employee_id}</td>
                      <td>{attendance.date}</td>
                      <td>
                        <button
                          class='inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                          style={{
                            padding: 10,
                            margin: 10,
                            backgroundColor: 'lightgrey',
                          }}
                          onClick={() => {
                            deleteDataC(attendance);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </table>
                </center>
                <br></br>
              </div>
            ))}
          <center></center> <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
}
