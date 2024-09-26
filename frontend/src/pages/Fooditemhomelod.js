import React from 'react'; 
import FoodHomeNav from '../components/FoodHomeNav';
import FoodHomeFotter from '../components/FoodHomeFooter';

export default function Foodhomelod(){
    return(
      <div>
        <FoodHomeNav/>
        <div class="grid grid-cols-2"  >
 
 

        
                <div style={{ backgroundImage: `url(${"https://i.pinimg.com/736x/e7/63/24/e7632495dd8e76e42fad24de2fc92f26.jpg"})`,paddingBottom:"400px" ,  backgroundRepeat: "no-repeat" , backgroundSize:"auto", width:"925px"}} >
                    <div style={{ paddingTop: '45%', paddingLeft: "100px" }}>
                        <h1 style={{ color: 'white', fontFamily:"Lucida Sans" , fontSize:"36px"  }}>Chooce your upcomming meals</h1>
                    </div>
                    <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <a href='/MainFoodHome'>
                  <div style={{paddingLeft:"350px"}}>

                   <button class="bg-white hover:bg-gray text-black  py-2 px-6 rounded-full"  >
  GetStarted
</button></div> </a>
                   
                    <div style={{ paddingLeft: '75%' }}>
                        
                    </div>

                    </div>
               
                <div style={{backgroundColor:"#F2E1CE"}}>
                <br></br>
                  <h1 style={{fontFamily:"Cormorant Garamond" , fontSize:"32px" , textAlign:"center" }}> "Health requires Healthy food”</h1>
                  <br></br>
                  <br></br>
                  <img src='https://res.cloudinary.com/hiruniherath/image/upload/v1665054061/image_processing20201009-14712-99vhob_kkvfj5.gif' style={{ width:"650px" , paddingLeft:"100px"}}  >

</img>

<br></br>
                  <br></br>

<img src='https://res.cloudinary.com/hiruniherath/image/upload/v1665055705/ITEMS_INCLUDING_Breakfast_Lunch_Dinner_oucy0h.png' style={{ width:"600px" , paddingLeft:"150px" , borderRadius:"25px"}}  >

</img>


                
                  
                </div>

            
            </div>

            <FoodHomeFotter/>
      </div>





    




    );

};