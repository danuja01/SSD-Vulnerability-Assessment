import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import AdminNav from '../components/AdminNav';

export default function UpdatePayment() {

  const [paymentID, updatePaymentID] = useState('');
  const [paymentDescription, updateDescription] = useState('');
  const [paymentCategory, updateCategory] = useState('');
  const [paymentDate, updateDate] = useState('');
  const [paymentAmount, updateAmount] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:4000/api/payments/search/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      updatePaymentID(record.payment.paymentID);
      updateDescription(record.payment.paymentDescription);
      updateCategory(record.payment.paymentCategory);
      updateDate(record.payment.paymentDate);
      updateAmount(record.payment.paymentAmount);

      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate('/');
        return;
      }

      // setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  
  async function sendData(e) {
    e.preventDefault();

    const updatePayment = {
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
    } else if (!paymentCategory.trim()) {
      alert('Please fill Payment category');
    } else if (!paymentDate.trim()) {
      alert('Please fill Payment date');
    } else if (!paymentAmount.trim()) {
      alert('Please fill Payment Amount');
    } else {
      await fetch(
        `http://localhost:4000/api/payments/updatePayment/${params.id}`,
        {
          method: 'post',
          body: JSON.stringify(updatePayment),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      navigate('../admin/payments');
    }
  }

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <center>
          <p style={{ fontSize: '30px' }}>Update Payment</p>
        </center>
        <br />
        <form onSubmit={sendData}>
          <fieldset
            style={{
              backgroundColor: '#D5D8DC',
              padding: '45px',
              borderRadius: '20px'
            }}
          >
            <div class="mb-6">
              <label htmlFor='paymentID'>New Payment ID</label>
              <br />
              <input
                type='text'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-bg-white dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='paymentID'
                value={paymentID}
                onChange={(e) => {
                  updatePaymentID(e.target.value);
                }}
              />
            </div>
            <div class="mb-6">
              <label htmlFor='paymentDescription'>
                New Payment Description
              </label>
              <br />
              <input
                type='text'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-bg-white dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='paymentDescription'
                value={paymentDescription}
                onChange={(e) => {
                  updateDescription(e.target.value);
                }}
              />
            </div>
            <div class="mb-6">
              <label htmlFor='category'>New Payment Category</label>
              <br />
              <select onChange={(e) => {
                  updateCategory(e.target.value);}}
                  value={paymentCategory}
                  class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-bg-white dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' style={{color:'#413F42'}}>
                  <option value={"Food Payment"} >Food Payment</option>
                  <option value={"Salary Payment"}>Salary Payment</option>
                  <option value={"Inventory Payment"}>Inventory Payment</option>
                  <option value={"Library Payment"}>Library Payment</option>
                  <option value={"Bursery Payment"}>Bursery Payment</option>
                  <option value={"External Payment"}>External Payment</option>
                </select>
            </div>

            <div class="mb-6">
              <label htmlFor='date'>New Payment Date</label>
              <br />
              <input
                type='date'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-bg-white dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='date'
                value={paymentDate}
                onChange={(e) => {
                  updateDate(e.target.value);
                }}
              />
            </div>

            <div class="mb-6">
              <label htmlFor='amount'>New Payment Amount</label>
              <br />
              <input
                type='number'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-[#606060] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id='amount'
                value={paymentAmount}
                onChange={(e) => {
                  updateAmount(e.target.value);
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
