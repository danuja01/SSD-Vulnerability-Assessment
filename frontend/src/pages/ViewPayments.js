import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../components/AdminNav';
import {DownloadTableExcel} from 'react-export-table-to-excel'
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [search, setsearch] = useState('');

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `http://localhost:4000/api/payments/getPayments`
      );

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:4000/api/payments/deletePayment/${id}`, {});

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }
  
  const paymentsRef = useRef(null)

  ///////////////////////////////////////////////

  const generateReport = () => {
    const doc = new jsPDF();
    const title = "View All Transactions";
    doc.setFontSize(15);
    doc.setTextColor(128, 0, 0);
    doc.text(title, 100, 10, null, null, "center");
    doc.setFontSize(12);
    const headers = [
        [
            "Payment ID",
            "Payment Description",
            "Payment Category",
            "Payment Date",
            "Payment Amount"
        ],
    ];

    const data = records.map((reserve) => [
       
        reserve.paymentID,
        reserve.paymentDescription,
        reserve.paymentCategory,
        reserve.paymentDate,
        reserve.paymentAmount,
       
    ]);
    let contents = {
        startY: 20,
        head: headers,
        body: data,
        theme:'grid',
        
    };
    
    doc.autoTable(contents);
    doc.save("Employee_Report.pdf");
};


  //////////////////////////////////////////////

  return (
    

    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <br />
        <img
          alt=''
          src='https://www.freewebheaders.com/wp-content/gallery/office-finance/online-business-and-accounting-website-header.jpg'
          style={{ height: '200px', width: '100%' }}
          class='max-w-full h-auto rounded-lg'
        />
        <br />
        <center>
          <p style={{ fontSize: '45px' }}>View Payments</p>
        </center>
        <br />

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <input
              className='border-2 border-brown-100 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
              type='search'
              placeholder='Search for Payments ...'
              name='searchQuery'
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            ></input>
          </div>
          
          <div style={{ marginLeft: 'auto' }}>
            <button
              type='button'
              class='focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-white dark:bg-[#A27B5C] '
            >
              <a href='/summaryPayment'>Payment Summary</a>
            </button>
          </div>
          <div>
                
            <button

              type="button"
              id="downloadBtn"
              class='focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-white dark:bg-[#D67D3E] '
              onClick={() => generateReport()}
            >
              Download PDF Report
            </button>
          </div>
          <div>
            <DownloadTableExcel
            filename='payments table'
            sheet='payments'
            currentTableRef={paymentsRef.current}>
              <button type='button'
              class='focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-white dark:bg-[#CA965C] '>
              Download Excel Report</button>
            </DownloadTableExcel>
          </div>
          <div>
            <button
              type='button'
              class='focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:text-white dark:bg-[#876445] '
            >
              <a href='/createPayment'>Create Payment</a>
            </button>
          </div>
          
        </div>
        <br />

        <table ref={paymentsRef} style={{margin:"25px 0",boxShadow:"0 0 20px rgba(0, 0, 0, 0.15),", border:"1px solid black",width:"100%"}}>
          <thead>
            <tr class='table-info'>
              <th style={{border: "1px solid", padding:"15px 50px", backgroundColor:"lightblue"}}>
                <center>Payment ID</center>
              </th>
              <th style={{border: "1px solid", padding:"15px 50px", backgroundColor:"lightblue"}}>
                <center>Payment Description</center>
              </th>
              <th style={{border: "1px solid", padding:"15px 50px", backgroundColor:"lightblue"}}>
                <center>Payment Category</center>
              </th>
              <th style={{border: "1px solid", padding:"15px 50px", backgroundColor:"lightblue"}}>
                <center>Payment Date</center>
              </th>
              <th style={{border: "1px solid", padding:"15px 50px", backgroundColor:"lightblue"}}>
                <center>Payment Amount</center>
              </th>
              <th style={{border: "1px solid", padding:"15px 50px", backgroundColor:"lightblue"}}>
                <center>Action</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {records
              .filter((records) => {
                if (search === '') {
                  return records;
                } else if (
                  records.paymentID
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  records.paymentDescription
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  records.paymentCategory
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return records;
                }
              })
              .map((records) => {
                return (
                  <tr>
                    <td style={{padding:"12px", border: "1px solid", backgroundColor:"#EEEEEE"}}>
                      <center>{records.paymentID}</center>
                    </td>
                    <td style={{padding:"12px", border: "1px solid", backgroundColor:"#EEEEEE"}}>
                      <center>{records.paymentDescription}</center>
                    </td>
                    <td style={{padding:"12px", border: "1px solid", backgroundColor:"#EEEEEE"}}>
                      <center>{records.paymentCategory}</center>
                    </td>
                    <td style={{padding:"12px", border: "1px solid", backgroundColor:"#EEEEEE"}}>
                      <center>{records.paymentDate}</center>
                    </td>
                    <td style={{padding:"12px", border: "1px solid", backgroundColor:"#EEEEEE"}}>
                      <center>{records.paymentAmount}</center>
                    </td>

                    <td style={{padding:"12px", border: "1px solid", backgroundColor:"#EEEEEE"}}>
                      <button style={{padding:"10px 25px",fontWeight:"500",boxSizing:"border-box"}} class="focus:outline-none text-gray-600 bg-yellow-500 hover:bg 'E6B325' focus:ring-4 focus:'E6B325' font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:'E6B325'">
                        <Link to={`/updatePayment/${records._id}`}>Edit</Link>
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => {
                          deleteRecord(records._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
