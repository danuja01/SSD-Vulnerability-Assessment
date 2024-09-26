import React, { useState, useEffect } from 'react';
import AdminNav from '../components/AdminNav';
import { PieChart } from 'react-minimal-pie-chart';

export default function Summary() {
  
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    async function getPayments() {
      const response = await fetch(
        `http://localhost:4000/api/payments/getPayments`
      );

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const payments = await response.json();
      setPayments(payments);
    }

    getPayments();
    

    return;
  }, [payments.length]);

  let foodArray = payments.filter((t) => t.paymentCategory === 'Food Payment');

  const foodTotal = foodArray.reduce((total, item) => {
    return total + parseFloat(item.paymentAmount);
  }, 0);

  let salaryArray = payments.filter(
    (t) => t.paymentCategory === 'Salary Payment'
  );

  const salaryTotal = salaryArray.reduce((total, item) => {
    return total + parseFloat(item.paymentAmount);
  }, 0);

  let inventoryArray = payments.filter(
    (t) => t.paymentCategory === 'Inventory Payment'
  );

  const inventoryTotal = inventoryArray.reduce((total, item) => {
    return total + parseFloat(item.paymentAmount);
  }, 0);

  let libraryArray = payments.filter(
    (t) => t.paymentCategory === 'Library Payment'
  );

  const libraryTotal = libraryArray.reduce((total, item) => {
    return total + parseFloat(item.paymentAmount);
  }, 0);

  let burseryArray = payments.filter(
    (t) => t.paymentCategory === 'Bursery Payment'
  );

  const burseryTotal = burseryArray.reduce((total, item) => {
    return total + parseFloat(item.paymentAmount);
  }, 0);

  let externalArray = payments.filter(
    (t) => t.paymentCategory === 'External Payment'
  );

  const externalTotal = externalArray.reduce((total, item) => {
    return total + parseFloat(item.paymentAmount);
  }, 0);

  const totalAmount = payments.reduce((total, item) => {
    return total + parseFloat(item.paymentAmount);
  }, 0);
  

  return (
    
    <section className='flex'>
      <AdminNav />
      <div
        className='w-full'
        style={{
          backgroundImage: `url("https://www.codespring.ro/wp-content/uploads/2020/09/industries-banking-finance.jpg")`,
          backgroundPosition: 'center',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
          
      
        }}
      >
        <div>
          <br />
          

          <center>
            <p style={{ fontSize: '45px' }}>Summary of Payments</p>
          </center>
          <br />
          <center>
            <fieldset
              class='p-3 mb-1 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-300 dark:text-green-800'
              role='alert'
              style={{
                padding: '15px',
                borderRadius: '20px',
                width: '85%',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
              }}
            >
              <div>
                Payment For food
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                {foodTotal}
              </div>
            </fieldset>
            <br />
          </center>

          <center>
            <fieldset
              class='p-3 mb-1 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-300 dark:text-green-800'
              role='alert'
              style={{
                padding: '15px',
                borderRadius: '20px',
                width: '85%',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
              }}
            >
              <div>
                Payment For Inventory
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                {inventoryTotal}
              </div>
            </fieldset>
            <br />
          </center>

          <center>
            <fieldset
              class='p-3 mb-1 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-300 dark:text-green-800'
              role='alert'
              style={{
                padding: '15px',
                borderRadius: '20px',
                width: '85%',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
              }}
            >
              <div>
                Payment For Library
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                {libraryTotal}
              </div>
            </fieldset>
            <br />
          </center>

          <center>
            <fieldset
              class='p-3 mb-1 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'
              role='alert'
              style={{
                padding: '15px',
                borderRadius: '20px',
                width: '85%',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
              }}
            >
              <div>
                Payment For Bursery
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                {burseryTotal}
              </div>
            </fieldset>
            <br />
          </center>

          <center>
            <fieldset
              class='p-3 mb-1 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'
              role='alert'
              style={{
                padding: '15px',
                borderRadius: '20px',
                width: '85%',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
              }}
            >
              <div>
                Payment For Salary
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                {salaryTotal}
              </div>
            </fieldset>
            <br />
          </center>

          <center>
            <fieldset
              class='p-3 mb-1 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'
              role='alert'
              style={{
                padding: '15px',
                borderRadius: '20px',
                width: '85%',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
              }}
            >
              <div>
                Any External
                Payments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                {externalTotal}
              </div>
            </fieldset>
            <br />
          </center>

          <center>
            <fieldset
              class='p-3 mb-1 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-400 dark:text-red-50'
              role='alert'
              style={{
                padding: '15px',
                borderRadius: '20px',
                width: '85%',
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
                fontStyle: 'oblique',
              }}
            >
              <div>
                Total Expeniture
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                {totalAmount}
              </div>
            </fieldset>
            <br />
          </center>
          <PieChart
  data={[
    { title: 'Library Payment', value: libraryTotal , color:'orange'},
    { title: 'Food Payment', value: foodTotal , color:'red'},
    { title: 'Inventory Payment', value:inventoryTotal,  color:'green'},
    { title: 'Salary Payment', value: salaryTotal, color:'blue'},
    { title: 'Bursey Payment', value: burseryTotal,color:'#ed8f1c' },
    { title: 'External Payment', value: externalTotal,color:'purple' }
  ]}
  radius={20}
  center={[100,30]}
  viewBoxSize={[200,55]}
  paddingAngle={0.1}
  lengthAngle={360}   
  startAngle={0}
  
 
  label={(data) => data.dataEntry.title}
              labelPosition={100.1}
              
              labelStyle={{
                fontSize: "3px",
                fontColor: "FFFFFA",
                fontWeight: "400",
              }}
/>;
        </div>
      </div>
    </section>
    
  );
  
}
