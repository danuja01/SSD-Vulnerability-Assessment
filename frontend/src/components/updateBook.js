import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../components/Assest/Form2.css';
import AdminNav from './AdminNav';

function UpdateBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [ISBN_Number, setISBN_Number] = useState('');
  const [Book_Name, setBook_Name] = useState('');
  const [Author_Name, setAuthor_Name] = useState('');
  const [Location, setLocation] = useState('');
  const [Copies, setCopies] = useState('');

  const getBook = () => {
    axios

      .get('http://localhost:4000/book/get/' + id)

      .then((res) => {
        setISBN_Number(res.data.book.ISBN_Number);
        setBook_Name(res.data.book.Book_Name);
        setAuthor_Name(res.data.book.Author_Name);
        setLocation(res.data.book.Location);
        setCopies(res.data.book.Copies);
      })

      .catch((err) => {
        alert(err.message);
      });
  };

  console.log(ISBN_Number);
  console.log(Book_Name);
  console.log(Author_Name);
  console.log(Location);
  console.log(Copies);

  useEffect(() => {
    getBook();
  }, []);

  function refreshPage() {
    window.location.reload(false);
    window.location.href = '/retrive';
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

          <div className='hei'>
            <form
              className='formalign'
              onSubmit={(e) => {
                e.preventDefault();

                const newBook = {
                  ISBN_Number,
                  Book_Name,
                  Author_Name,
                  Location,
                  Copies,
                };

                axios
                  .put('http://localhost:4000/book/update/' + id, newBook)
                  .then(() => {
                    alert('Book Updated', refreshPage());
                  })
                  .catch((err) => {
                    alert(err);
                  });
              }}
            >
              <div class='form'>
                <div class='title'>Update Book Details</div>

                <div className='input-container ic1'>
                  <input
                    value={ISBN_Number}
                    type='number'
                    className='input'
                    minLength={13}
                    maxLength={13}
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
                    value={Book_Name}
                    className='input'
                    id='Book_Name'
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
                    value={Author_Name}
                    className='input'
                    id='Author_Name'
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
                    value={Location}
                    className='input'
                    id='Location'
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
                    value={Copies}
                    className='input'
                    id='Copies'
                    onChange={(e) => {
                      setCopies(e.target.value);
                    }}
                  />
                  <div class='cut'></div>
                  <label for='Copies' class='placeholder'>
                    Copies
                  </label>
                </div>
                <br />
                <button class='submit' type='submit'>
                  {' '}
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpdateBook;
