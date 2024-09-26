import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../components/Assest/Form2.css';
import AdminNav from '../components/AdminNav';

function IssueBook() {
  const { id } = useParams();
  console.log(id);

  const [ISBN_Number, setISBN_Number] = useState('');
  const [Book_Name, setBook_Name] = useState('');
  const [Student_ID, setStudent_ID] = useState('');
  const [Student_Name, setStudent_Name] = useState('');
  const [Count, setCount] = useState('');
  const [Date, setDate] = useState('');

  const getBook = () => {
    axios

      .get('http://localhost:4000/book/get/' + id)

      .then((res) => {
        setISBN_Number(res.data.book.ISBN_Number);
        setBook_Name(res.data.book.Book_Name);
        setCount(res.data.book);
      })

      .catch((err) => {
        alert(err.message);
      });
  };

  console.log(Count);
  useEffect(() => {
    getBook();
  }, []);

  function sendData(e) {
    e.preventDefault();

    const newBook = {
      Student_ID,
      Student_Name,
      ISBN_Number,
      Book_Name,
      Date,
    };
    console.log(newBook);
    axios
      .post('http://localhost:4000/BookIssue/issue', newBook)
      .then(() => {
        alert('Book Issued', refreshPage());
      })
      .catch((err) => {
        alert(err);
      });
  }

  function refreshPage() {
    window.location.reload(false);
    window.location.href = '/retriveissue';
  }

  return (
    <div id='lib' className='libimg'>
      <section className='flex gap-6'>
        <AdminNav />
        <div>
          <ul>
            <li>
              <a href='/libHome'>Home</a>
            </li>
            <li>
              <a href='/retrive'>All Books</a>
            </li>
            <li>
              <a href='/add'>Add Book</a>
            </li>
            <li>
              <a href='/retriveissue'>Issued Books</a>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <div className='hei'>
            <form className='formalign' onSubmit={sendData}>
              <div class='form'>
                <div class='title'>Issue Book</div>

                <div className='input-container ic1'>
                  <input
                    type='text'
                    value={ISBN_Number}
                    className='input'
                    disabled
                    id='ISBN_Number'
                    onChange={(e) => {
                      setISBN_Number(e.target.value);
                    }}
                  />
                  <div class='cut'></div>
                  <label for='ISBN_Number' class='placeholder'>
                    {' '}
                    ISBN Number
                  </label>
                </div>

                <div className='input-container ic2'>
                  <input
                    type='text'
                    value={Book_Name}
                    className='input'
                    disabled
                    id='Publisher'
                    required
                    onChange={(e) => {
                      setBook_Name(e.target.value);
                    }}
                  />
                  <div class='cut'></div>
                  <label for='Book_Name' class='placeholder'>
                    Book Name{' '}
                  </label>
                </div>

                <div className='input-container ic2'>
                  <input
                    type='text'
                    className='input'
                    id='Student_ID'
                    maxLength={6}
                    pattern='[0-9]{6}'
                    required
                    onChange={(e) => {
                      setStudent_ID(e.target.value);
                    }}
                  />
                  <div class='cut'></div>
                  <label for='Student_ID' class='placeholder'>
                    Student ID{' '}
                  </label>
                </div>

                <div className='input-container ic2'>
                  <input
                    type='text'
                    className='input'
                    id='Student_Name'
                    onChange={(e) => {
                      setStudent_Name(e.target.value);
                    }}
                  />
                  <div class='cut'></div>
                  <label for='Student_Name' class='placeholder'>
                    Student Name{' '}
                  </label>
                </div>

                <div className='input-container ic2'>
                  <input
                    type='Date'
                    className='input'
                    id='Location'
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                  <div class='cut'></div>
                  <label for='Date' class='placeholder'>
                    Date
                  </label>
                </div>
                <br />
                <button class='submit' type='submit'>
                  {' '}
                  Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IssueBook;
