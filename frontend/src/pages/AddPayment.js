import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import AdminNav from '../components/AdminNav';

function AddPayment() {
  const navigate = useNavigate();

  const [paymentID, setPaymentID] = useState('');
  const [paymentDescription, setDescription] = useState('');
  const [paymentCategory, setCategory] = useState('');
  const [paymentDate, setDate] = useState('');
  const [paymentAmount, setAmount] = useState('');

  function sendData(e) {
    e.preventDefault();

    const newPayment = {
      paymentID,
      paymentDescription,
      paymentCategory,
      paymentDate,
      paymentAmount,
    };

    if (!paymentID.trim()) {
      alert('Please fill Payment ID');
    } else if (!paymentDescription.trim()) {
      alert('Please fill Payment description');
    
    } else if (!paymentDate.trim()) {
      alert('Please fill Payment date');
    } else if (!paymentAmount.trim()) {
      alert('Please fill Payment Amount');
    } else {
      
      axios
        .post('http://localhost:4000/api/payments/addPayment', newPayment)
        .then(() => {
          alert('Payment Added');
        })
        .catch((err) => {
          alert(err);
        });
      navigate('../admin/payments');
    }
  }

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <center>
          <p style={{ fontSize: '35px' }}>Create Payment</p>
        </center>
        <br />
        <form onSubmit={sendData}>
          <fieldset
            style={{
              backgroundColor: '#A9CCE3',
              padding: '45px',
              borderRadius: '20px',
            }}
          >
            <div class="mb-6">
              <label htmlFor='paymentID'>Payment ID</label>
              <br />
              <input
                type='text'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#E8E8E8] dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='paymentID'
                placeholder='Enter Payment ID'
                onChange={(e) => {
                  setPaymentID(e.target.value);
                }}
              />
            </div>
            <div class="mb-6">
              <label htmlFor='paymentDescription'>Payment Description</label>
              <br />
              <input
                type='text'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#E8E8E8] dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='paymentDescription'
                placeholder='Enter Payment Description'
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div class="mb-6">
              <label htmlFor='category'>Payment Category</label>
              
              <br />
              <select onChange={(e) => {
                  setCategory(e.target.value);}}
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#E8E8E8] dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' style={{color:'#413F42'}}>
                  <option value="" disabled selected hidden>Select Payment Category...</option>
                  <option value={"Food Payment"} >Food Payment</option>
                  <option value={"Salary Payment"}>Salary Payment</option>
                  <option value={"Inventory Payment"}>Inventory Payment</option>
                  <option value={"Library Payment"}>Library Payment</option>
                  <option value={"Bursery Payment"}>Bursery Payment</option>
                  <option value={"External Payment"}>External Payment</option>
                </select>
            </div>

            <div class="mb-6">
              <label htmlFor='date'>Payment Date</label>
              <br />
              <input
                type='Date'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#E8E8E8] dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='date'
                placeholder='Enter Payment Date'
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>

            <div class="mb-6">
              <label htmlFor='amount'>Payment Amount</label>
              <br />
              <input
                type='number'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#E8E8E8] dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='amount'
                placeholder='Enter Payment Amount'
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <br />
          <center>
            <button
              type='submit'
              class='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
            >
              Submit
            </button>
            <button class='text-white bg-white-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#0277BD] dark:hover:bg-[#1565C0] focus:outline-none dark:focus:ring-blue-800'>
              <a href='/admin/payments'>Cancel</a>
            </button>
          </center>
        </form>
      </div>
    </section>
  );
}

export default AddPayment;
