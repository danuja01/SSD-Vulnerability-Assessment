import React, { useState } from "react";
import "../components/Assest/Home.css"
import AdminNav from "./AdminNav"


export default function Home() {

    return (

        <div className="bcimg">
            <section className='flex gap-6'>

                <AdminNav />
                <div >
                    <h1 className="hh1"> Welcome To The </h1>
                    <h1 className="hh2">Library Management <br />System</h1>
                    <div className="box">
                        <a href="/retrive" >       <div className="sec">All Books       </div>  </a>    <br />
                        <a href="/add" >           <div className="sec">Add Books       </div>  </a>    <br />
                        <a href="/retriveissue" >  <div className="sec">Issued Books    </div>  </a>
                    </div>
                </div>

            </section >
        </div>
    )
}
