import React, { useState, useEffect } from "react";
import FoodHomeNav from '../components/FoodHomeNav';
import FoodHomeFotter from '../components/FoodHomeFooter';
import axios from 'axios';



export default function DinnertHome() {

    const [FoodItem, setFoodItem] = useState([]);
    const [_id, setid] = useState('');
    const [name, setName] = useState(" ");
    const [price, setprice] = useState(" ");

    function sendData(e) {
        e.preventDefault();

        const newUser = {
            name,
            price,

        }

        axios.post("http://localhost:4000/api/cart/", newUser).then(() => {
            ("User added")
            setName('');
            setprice('');


            alert("Item Added to the cart");
            window.location.reload();

        }).catch((err) => {
            alert("Error in adding to the Cart   ");
        })
    }

    useEffect(() => {

        function getFoodItem() {

            axios.get("http://localhost:4000/api/fooditem/").then((res) => {
                console.log(res.data);
                setFoodItem(res.data);


            }).catch((err) => {
                alert(err.message);
            })

        }

        getFoodItem();
    }, []);

    return (

        <section><div>
            <FoodHomeNav />
        </div>
            <div>
                <div class="pl-10"><h1 style={{ fontSize: "32px", fontFamily: "lusida sans unicord" }}>DINNER</h1></div>
            </div>
            <br></br>
            <br></br>

            <div class="pb-10 pl-10 pr-10" style={{ paddingBottom: "40vh" }}>
                <div class="grid grid-cols-4 gap-4">

                    {FoodItem.filter(FoodItem => {
                        if (FoodItem.type == "dinner") {
                            return FoodItem;


                        }
                       
                    }).map((FoodItem) => {
                        return (
                            <div key={FoodItem._id}>
                                <div class="w-full max-w-sm bg-white rounded-lg shadow-md bg-[#716565] dark:border-gray-700 hover:bg-[#8B7979] ">
                                <form onSubmit={sendData} >

                                    <div class="px-5 pb-5">
                                        <a href="#">
                                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><br></br> {FoodItem.name}</h5>
                                        </a>
                                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><br></br> {FoodItem.description}</h5>

                                        <div class="flex justify-between items-center">
                                            <span class="text-3xl font-bold text-gray-900 dark:text-white"> LKR {FoodItem.price}</span>
                                                    
                                            <button type="submit" onClick={(() => setName(FoodItem.name) & setprice(FoodItem.price))} class="text-white bg-brown-100 hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2  dark:focus:ring-gray-800">
                                                <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="bg-brown-100" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                
                                                   </button>
                                                  
                                        </div>
                                    </div>
                                    </form>
                                </div>


                            </div>

                        )


                    })}
                </div>
            </div>


            <FoodHomeFotter />


        </section>


    );
};