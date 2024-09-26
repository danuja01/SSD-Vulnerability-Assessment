import React, { useState, useEffect } from "react";
import axios from 'axios';
import FoodHomeNav from '../components/FoodHomeNav';
import FoodHomeFotter from '../components/FoodHomeFooter';
export default function Cart() {

    const [Cart, setCart] = useState([]);
    let total=0;
    const [totalprice, settotalprice] = useState([]);

    useEffect(() => {

        function getFoodItem() {

            axios.get("http://localhost:3000/api/cart/").then((res) => {
                console.log(res.data);
                setCart(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    if(i==res.data.length){
                        break;
                    }
                    else{
                        total=total+ res.data[i].price;
                    }
                    
                  }
                  console.log(total);
                  settotalprice(total);
            }).catch((err) => {
                alert(err.message);
            })

        }

        getFoodItem();
    }, []);
    return (
        <section>
            <div>
                <FoodHomeNav />
            </div>
            <div>
                {Cart.map((Cart) => {
                    return (
                        <div key={Cart._id}>
                            
                        {Cart.name}
                        {Cart.price}

                       

                        </div>

                    )


                })}
 <h1>Total :{totalprice}</h1>
            </div>
        </section>

    );

};