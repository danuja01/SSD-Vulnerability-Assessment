import React, { useState } from 'react';
import axios from 'axios';
import '../components/Assest/Form2.css';
import AdminNav from '../components/AdminNav';

export default function AddBook() {
  const [ISBN_Number, setISBN_Number] = useState('');
  const [Book_Name, setBook_Name] = useState('');
  const [Author_Name, setAuthor_Name] = useState('');
  const [Location, setLocation] = useState('');
  const [Copies, setCopies] = useState('');

  function sendData(e) {
    e.preventDefault();

    const newBook = {
      ISBN_Number,
      Book_Name,
      Author_Name,
      Location,
      Copies,
    };
    console.log(newBook);
    axios
      .post('http://localhost:4000/book/add', newBook)
      .then(() => {
        alert('Book Added', refreshPage());
      })
      .catch((err) => {
        alert(err);
      });
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
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
                <a class='active' href='/add'>
                  Add Book
                </a>
              </li>
              <li>
                <a href='/retriveissue'>Issued Books</a>
              </li>
            </ul>
            <br />
            <br />
            <div className='hei'>
              <form className='formalign' onSubmit={sendData}>
                <div class='form'>
                  <div class='title'>Add Book</div>

                  <div className='input-container ic1'>
                    <input
                      type='text'
                      className='input'
                      id='ISBN_Number'
                      maxLength={13}
                      pattern='[0-9]{13}'
                      placeholder=' '
                      required
                      onChange={(e) => {
                        setISBN_Number(e.target.value);
                      }}
                    />
                    <div class='cut'></div>
                    <label for='ISBN_Number' class='placeholder'>
                      ISBN Number{' '}
                    </label>
                  </div>

                  <div className='input-container ic2'>
                    <input
                      type='text'
                      className='input'
                      id='Book_Name'
                      placeholder=' '
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
                      id='Author_Name'
                      placeholder=' '
                      required
                      onChange={(e) => {
                        setAuthor_Name(e.target.value);
                      }}
                    />
                    <div class='cut'></div>
                    <label for='Author_Name' class='placeholder'>
                      {' '}
                      Author Name
                    </label>
                  </div>

                  <div className='input-container ic2'>
                    <input
                      type='text'
                      className='input'
                      id='Location'
                      placeholder=' '
                      required
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    />
                    <div class='cut'></div>
                    <label for='Location' class='placeholder'>
                      Location
                    </label>
                  </div>

                  <div className='input-container ic2'>
                    <input
                      type='number'
                      className='input'
                      id='copies'
                      placeholder=' '
                      required
                      onChange={(e) => {
                        setCopies(e.target.value);
                      }}
                    />
                    <div class='cut'></div>
                    <label for='copies' class='placeholder'>
                      Copies Count
                    </label>
                  </div>
                  <br />
                  <button class='submit' type='submit'>
                    {' '}
                    ADD
                  </button>
                  <br />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
