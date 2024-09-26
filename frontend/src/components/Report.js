import React, { useState, useEffect } from 'react';
import axois from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, Modal, Table } from 'react-bootstrap';
import AdminNav from '../components/AdminNav';

const Report = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Book, setBook] = useState([]);
  useEffect(() => {
    function getBook() {
      axois
        .get('http://localhost:4000/book/retrive')
        .then((res) => {
          console.log(res.data);
          setBook(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBook();
  }, []);
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div className='row'>
          <div className='col-md-10'></div>
          <div className=''>
            <Button
              role='button'
              className='button-37'
              variant='primary'
              onClick={() => {
                window.print();
              }}
            >
              <span class='text'>Print Report</span>
            </Button>
          </div>
        </div>
        <br></br>
        <table className='table table-hover' style={{ marginTop: '40px' }}>
          <thead>
            <tr>
              <th scope='col'>ISBN_Number</th>
              <th scope='col'>Book_Name</th>
              <th scope='col'>Author_Name</th>
              <th scope='col'>Publisher</th>
              <th scope='col'>Location</th>

              {/* comment */}
            </tr>
          </thead>

          <tbody>
            {Book.map((e, i) => (
              <tr>
                <td>{e.ISBN_Number}</td>
                <td>{e.Book_Name}</td>
                <td>{e.Author_Name}</td>
                <td>{e.Publisher}</td>
                <td>{e.Location}</td>

                {/*  */}

                {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Report;
