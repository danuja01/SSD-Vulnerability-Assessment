import React, { useState, useEffect } from 'react';
import AdminNav from '../components/AdminNav';
import AdminName from '../components/AdminName';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';



export default function AllItems() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [search, setsearch] = useState('');
  const [_id, setid] = useState('');

  useEffect(() => {
    getItems();
  }, []);

  function getItems() {
    axios
      .get('http://localhost:4000/item/get-item')
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  //delete
  function deleteItem(_id) {
    axios
      .delete('http://localhost:4000/Item/delete/' + _id)
      .then((res) => {
        alert('Item deleted successfully');
        getItems();
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const generatePdf = () => {
    const doc = new jsPDF()
    autoTable(doc, {
      columns: [
        { header: 'Item Name', dataKey: 'item_Name' },
        { header: 'Price', dataKey: 'price' },
        { header: 'Invoice No', dataKey: 'invoice_No' },
        { header: 'Quantity', dataKey: 'quantity' },
        { header: 'Date', dataKey: 'date' },
      ],
      body: items.map(item => {
        return {
          item_Name: item.item_Name,
          price: item.price,
          invoice_No:item.invoice_No,
          quantity: item.quantity,
          date: item.date,
        };
      })
    })
    doc.save('itemDetails.pdf')
  }

  const navigateToAddItemPage = ({ edit, item }) => {
    // window.location.href = "/AddItem";
    navigate('/admin/addItem', { state: { edit: edit, item: item } });
  };

  const editItem = (item) => {
    navigateToAddItemPage({ edit: true, item: item });
  };

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12 '>
        <AdminName />

        <h2 className='text-2xl font-bold text-gray-900 justify-start flex mb-8 mx-12 mt-12'>
          {' '}
          Manage All Items{' '}
        </h2>

        <div className='flex flex-col mx-12'>
          <div className='overflow-x-auto'>
            <div className='flex justify-between py-3 pl-2'>
              <div className='relative max-w-xs'>
                <label htmlFor='hs-table-search' className='sr-only'>
                  Search
                </label>
                <input
                  type='text'
                  name='hs-table-search'
                  id='hs-table-search'
                  className='block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                  placeholder='Search...'
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
                <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
                  <svg
                    className='h-3.5 w-3.5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                  </svg>
                </div>
              </div>

              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                                focus:ring-gray-300 font-medium rounded-full 
                                text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
                                dark:hover:bg-gray-700 dark:focus:ring-gray-700
                                 dark:border-gray-700'
                onClick={() => {
                 generatePdf();
                }}
              >
                &#8681; Generate
                </button>
           
            </div>
            <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                                focus:ring-gray-300 font-medium rounded-full 
                                text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
                                dark:hover:bg-gray-700 dark:focus:ring-gray-700
                                 dark:border-gray-700'
                onClick={() => {
                  navigateToAddItemPage({ edit: false });
                }}
              >
              &#x2B; Add
              </button>
            

            <div className='p-1.5 w-full inline-block align-middle'>
              <div className='overflow-hidden border rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th scope='col' className='py-3 pl-4'>
                        <div className='flex items-center h-5'>
                          <input
                            id='checkbox-all'
                            type='checkbox'
                            className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                          />
                          <label htmlFor='checkbox' className='sr-only'>
                            Checkbox
                          </label>
                        </div>
                      </th>

                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                      >
                        Item Name
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                      >
                        price
                      </th>

                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
                      >
                        Invoice No
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase '
                      >
                        Edit
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase '
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody className='divide-y divide-gray-200'>
                    {items &&
                      items
                        .filter((items) => {
                          if (search == '') {
                            return items;
                          } else if (
                            items.item_Name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return items;
                          }
                        })
                        .map((items) => {
                          return (
                            <tr key={items._id}>
                              <td className='py-3 pl-4'>
                                <div className='flex items-center h-5'>
                                  <input
                                    type='checkbox'
                                    className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
                                  />
                                  <label htmlFor='checkbox' className='sr-only'>
                                    Checkbox
                                  </label>
                                </div>
                              </td>

                              <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                {items.item_Name}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                {items.price}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                                {items.invoice_No}
                              </td>

                              <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                                <a
                                  className='text-purple-500 hover:text-green-700'
                                  onClick={() => editItem(items)}
                                  href='#'
                                >
                                  Edit
                                </a>
                              </td>
                              <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
                                <a
                                  className='text-orange-500 hover:text-red-700'
                                  onClick={() => deleteItem(items._id)}
                                  href='#'
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
