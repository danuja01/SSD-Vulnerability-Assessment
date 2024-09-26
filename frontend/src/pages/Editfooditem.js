import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import AdminNav from '../components/AdminNav';
import AdminName from '../components/AdminName';
import { useParams } from 'react-router-dom';


export default function EditFoodItem() {
    // Get Target ID
    let params = useParams();
    //console.log(params.id)
    const [id, setid] = useState();
    const [type,settype]=useState();
    const [name, setname] = useState();
    const [price, setprice] = useState();
    const [description, setdescription] = useState();
    // Get 

    useEffect(() => {

        const getItem = () => {

            axios.get(`http://localhost:4000/api/fooditem/${params.id}`, {
            })
                .then((res) => {
                    console.log(params.id)
                    setid(params.id)
                    setname(res.data.name)
                    setprice(res.data.price)
                    setdescription(res.data.description)
                    settype(res.data.type)

                }).catch((err) => {
                    alert(err.message)
                })
        }

        getItem();

    }, [])

    function sendData(e) {

        e.preventDefault();
        const newItem = {
            id,
            name,
            price,
            description,
        }
        axios.put("http://localhost:4000/api/fooditem/" + id, newItem).then(() => {

            alert(" Edited Successfully");
            window.location.reload();

            setname("");
            setprice("");
            setdescription("");

        }).catch((err => {

            alert(err)
        }))

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
                            <h2 className='text-2xl font-bold text-gray-900 justify-start flex'>Edit Existing Item (~{type}~)</h2>
                        </td>
                        <td>

                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPP3IpAATB3ljqqg4zyJ7f5mG-G_nwRE4GzMIv643SQPcCC_yVBxQnJ7TOu2TzKygwqC4&usqp=CAU' style={{ width: "45px" }}  >

                            </img>
                        </td>

                    </tr>
                </table>

                <br></br>

                <center>

                    <div class="grid grid-cols-2 gap-4">

                        <div>
                            <br></br>
                            <br></br>

                            <img src='https://www.foodandlandusecoalition.org/wp-content/uploads/2021/06/ICON-1.gif' style={{ width: "800px" }}  ></img>

                        </div>

                        <div>


                            <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-[#e7e5cf] " >

                                <form onSubmit={sendData}>

                                    <div className="mb-3">
                                        <label for="email" class="block mb-2 text-sm font-medium dark:text-black">Item Name</label>                            <br />
                                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                            value={name}
                                            onChange={(e) => {
                                                setname(e.target.value);
                                            }}
                                        ></input>
                                    </div>

                                    <div class="mb-6"  >
                                        <label for="email" class="block mb-2 text-sm font-medium dark:text-black">Item price</label>
                                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                            value={price}
                                            onChange={(e) =>
                                                setprice(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="mb-6"  >
                                        <label for="description" class="block mb-2 text-sm font-medium dark:text-black">Item description</label>

                                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description..."
                                            value={description}
                                            onChange={(e) => setdescription(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <a href='/admin/addfooditem'>

                                        <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SUBMIT</button>
                                    </a>

                                </form>
                            </a>
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


