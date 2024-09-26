import React, { useState, useEffect } from "react";
import axios from 'axios';
import FoodHomeNav from '../components/FoodHomeNav';
import FoodHomeFotter from '../components/FoodHomeFooter';
import jsPDF from "jspdf";
import "jspdf-autotable";


export default function ViewMenu() {
    const [Cart, setCart] = useState([]);
    let total = 0;
    let Tot = 0;
    const [totalprice, settotalprice] = useState([]);

    useEffect(() => {

        function getFoodItem() {

            axios.get("http://localhost:4000/api/cart/").then((res) => {
                console.log(res.data);
                setCart(res.data);
                let k = res.data.length;
                console.log(k)
                for (let i = 0; i < k; ) {
                    total = total + res.data[i].price;
                    i++;
                }
                settotalprice(total);
                console.log(total);


            }).catch((err) => {
                alert(err.message);
            })

        }

        getFoodItem();
    }, []);
    //delete
    function deleteItem(_id) {
        axios.delete("http://localhost:4000/api/cart/" + _id).then((res) => {
            alert("Item deleted successfully");
            window.location.reload();

        }).catch((err) => {
            alert(err.message);
        })


    }

    const generateReport = () => {
        const doc = new jsPDF();
        var imgData = 'https://res.cloudinary.com/hiruniherath/image/upload/v1665041791/Peachpuff_Brush_Stroke_Photography_Logo_2_ebgo7t.png'

        const title = `Selected Menu Data ( Total: ${totalprice} )`;
        doc.setFontSize(16);
        doc.setTextColor(128, 0, 0);
        doc.text(title, 100, 10, null, null, "center");
        doc.setTextColor(0);
        doc.setFontSize(16);

        doc.setFontSize(8);
        doc.text(
            `*This Report is automatically generated.`,
            20,
            35,
            null,
            null
        );

        const headers = [
            [
                "No",
                "Name",
                "Price",


            ],
        ];

        const data = Cart.map((reserve, index) => [
            index,
            reserve.name,
            reserve.price,

        ]);
        let contents = {
            startY: 20,
            head: headers,
            body: data,
        };
        doc.addImage(imgData, 'JPEG', 14, 1, 12, 12);
        doc.autoTable(contents);
        doc.save("Menu_Report.pdf");
    };
    return (

        <section><div>
            <FoodHomeNav />
        </div>
            <div>
                <div class="pl-10"><h1 style={{ fontSize: "32px", fontFamily: "lusida sans unicord" }}>View Selected Menu</h1></div>
            </div>




            <div class="grid grid-cols-2  pl-10">

                <div>



                    <a href="#" class="block w-4/5  bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-[#CDBCA9] " >

                        <form >
                            <div><h1 style={{ fontSize: "25px", fontFamily: "lusida sans unicord", paddingLeft: "250px", color: "#4C4E52" }}> Menu</h1></div>
                            <br></br>

                            <div class="mb-6"  >
                                {Cart.map((Cart) => {
                                    return (
                                        <div key={Cart._id}>


                                            
                <table >
    


                                            
                                           <row style={{paddingLeft:"5px"}}>
                                                Name : {Cart.name} <span>&nbsp;&nbsp;</span>
                                                Price : {Cart.price}<span>&nbsp;&nbsp;</span>

                                                </row>

                                            <row style={{paddingLeft:"5px"}}>

                                                <button onClick={() => deleteItem(Cart._id)} class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" >Delete</button>
                                                </row> </table>
                                        </div>



                                    )


                                })}

                            </div>




                            <label for="countries" class="block mb-2 text-sm font-medium dark:text-black" style={{ fontSize: "30px",paddingLeft:"10px" ,textDecorationLine: "underline", textDecorationStyle: "double"}}>Total : {totalprice}</label>

                            <br></br>
                            <br></br>
                            <br></br>
                            <div style={{paddingLeft:"150px"}}>

                            <a href='/addfooditem'>


                                <button type="submit" class="text-white bg-brown-100 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SUBMIT</button>
                            </a>
                            <a href=''>


                                <button class="text-white bg-brown-100 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => generateReport()}>GENERATE PDF</button>
                            </a>

                            </div>
                        </form>

                        <br></br>
                        
                    </a>
                </div>
                <div class="pr-20">
                    <br></br>
                    <br></br>

                    <img src='https://www.eminentinfoweb.com/wp-content/uploads/2020/03/bg.gif' style={{ width: "800px", paddingTop: "10px" }}  ></img>

                </div>

            </div>



            <br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br>

            <FoodHomeFotter />


        </section>


    );

};