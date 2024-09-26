import React, { useState } from "react"
import axios from "axios";
import AdminNav from '../components/AdminNav';
import AdminName from '../components/AdminName';

export default function AddFoodItem() {
    const [name, setName] = useState(" ");
    const [price, setprice] = useState(" ");
    const [description, setdescription] = useState(" ");
    const [type, settype] = useState(" ");

    function sendData(e) {
        if (!(name.trim().length > 2)) {
            alert("Name Length Must Be Over 3 characters")
            return
        }


        e.preventDefault();

        const newUser = {
            name,
            price,
            description,
            type
        }

        axios.post("http://localhost:4000/api/fooditem/", newUser).then(() => {
            ("User added")
            setName('');
            setprice('');
            setdescription('');
            settype('');

            alert("Food Item Added");
            window.location.reload();

        }).catch((err) => {
            alert("Check Details - Price Must be a Number value ");
        })
    }

    return (
        <section className='flex gap-6'>
            <AdminNav />
            <div className='w-full mr-12'>
                <AdminName />

                <br></br>
                <table>
                    <tr>
                        <td>
                            <h2 className='text-2xl font-bold text-gray-900 justify-start flex'>Add New Item</h2>
                        </td>
                        <td>

                            <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/add-food-2578682-2146933.png' style={{ width: "45px" }}  >

                            </img>
                        </td>

                    </tr>
                </table>

                <br></br>

                <center>

                    <div class="grid grid-cols-2 gap-4">
                        <div>

                            <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-[#e7e5cf] " >

                                <form onSubmit={sendData}>

                                    <div class="mb-6"  >
                                        <label for="email" class="block mb-2 text-sm font-medium dark:text-black">Item name</label>
                                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div class="mb-6"  >
                                        <label for="email" class="block mb-2 text-sm font-medium dark:text-black">Item price</label>
                                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                            onChange={(e) => setprice(e.target.value)}
                                        />
                                    </div>
                                    <div class="mb-6"  >
                                        <label for="description" class="block mb-2 text-sm font-medium dark:text-black">Item description</label>

                                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description..."
                                            onChange={(e) => setdescription(e.target.value)}
                                        />
                                    </div>



                                    <label for="countries" class="block mb-2 text-sm font-medium dark:text-black">Item type(breackfast,lunch,dinner)</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => settype(e.target.value)}
                                    >                            
                                    
                                      <option value="">select</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                    </select>
                                    <br></br>

                                    <a href='/admin/addfooditem'>


                                        <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SUBMIT</button>
                                    </a>



                                </form>
                            </a>
                        </div>
                        <div>
                            <br></br>
                            <br></br>

                            <img src='https://i.pinimg.com/originals/24/3b/24/243b24ce3b4d9bc259810eeecd67dc20.gif' style={{ width: "800px" }}  ></img>

                        </div>

                    </div>

                </center>
                <br></br>

                <a href='/admin/breakfastitems'>
                    <br></br>

                    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#4F310E] dark:hover:bg-[#696969] dark:focus:ring-gray-700 dark:border-gray-700">BACK</button>
                </a>
















            </div>
        </section>
    );
};


