import React, { useState } from 'react'; 
import FoodHomeNav from '../components/FoodHomeNav';
import FoodHomeFotter from '../components/FoodHomeFooter';
import Calendar from 'react-calendar';



export default function MainFoodHome(){
    const [value, onChange] = useState(new Date());
    return(

      <section><div>
            <FoodHomeNav />
        </div>
        
        <div class="grid grid-cols-1 ">
                <div>

                    <img src='https://res.cloudinary.com/hiruniherath/image/upload/v1665512262/test/Create_your_own_menu_for_upcomming_week_own_experience_own_choice_jgyzhy.png'style={{height:"550px",width:"100%"}}/>
                </div>
                <br></br>

                <div><h1 style={{fontSize:"32px" , fontFamily:"Franklin Gothic Medium",paddingLeft:"560px"}}>-----------Latest-----------</h1></div>
            </div>
            <br></br>
            

            <div class="grid grid-cols-3 gap-4 pl-10">
              

               
                <div><a href="#" class="block p-6 max-w-sm  rounded-lg border border-gray-200  hover:bg-[#8B7979] dark:bg-[#796969] dark:border-gray-700 shadow-2xl">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">“By choosing healthy over skinny you are choosing self-love over self-judgement.” </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Healthy doesn’t mean skinny. We all have different genes, different body types, and different shapes. Eat healthy, stay active, and take less stress.<br></br> Skinny or not, you will be in better shape than when you were eating unhealthy and not working out.We must always keep our healthy.Health comes FIRSt<br></br>

<br></br></p>
</a></div>

<div><a href="#" class="block p-6 max-w-sm  rounded-lg border border-gray-200  hover:bg-[#8B7979] dark:bg-[#796969] dark:border-gray-700 shadow-2xl">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">“Your diet is a bank account. Good food choices are good investments.” – Bethenny Frankel</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Think about it! Money is not the only type of investment. You invest in yourself as well. You learn new skills and also pay for your food. Why not pay for food that’s healthy and gives a return in terms of good health and a fit body and mind? We must be reponsible for our future and life . Think of future</p><br></br>
</a></div>

<div><a href="#" class="block p-6 max-w-sm  rounded-lg border border-gray-200  hover:bg-[#8B7979] dark:bg-[#796969] dark:border-gray-700 shadow-2xl ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">“Healthy eating is a way of life, so it’s important to establish routines that are simple, realistically, and ultimately livable.” – Horace</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">I am sure you have heard of thousands of diets. Most people fail to continue beIf you are used to eating rice, nothing wrong with it. Make sure you practice portion control and consume a source of protein and lots of veggies with it.<br></br><br></br>

</p>
</a></div>

            </div> 
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a href="#" class="block p-6  bg-white rounded-lg border border-gray-200 shadow-inner  dark:bg-[#C8B39C]  ">

            
<h2 class="text-center text-gray-700 dark:text-gray-800" style={{fontFamily:"Palatino Linotype", fontSize:"26px"}}>Get started with your own menus for each week <br></br>  select and chose the most appopriate menus with health and new items!</h2> <br></br><br></br>


            <div class="grid grid-cols-2 gap-10  pl-10 pr-10 row-span-3" >
  

<div class="block p-2 max-h-300  border border-gray-200 shadow-md dark:bg-[#605647]  ">
  <br></br>
  
<Calendar onChange={onChange} value={value} >
</Calendar>

 
</div>


<div>



<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <center>
      <img style={{width:"450px"}}
        src="https://images.unsplash.com/photo-1458253756247-1e4ed949191b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"
        class="block w-full"
        alt="..."
      /></center>
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
    <center>
      <img style={{width:"450px"}}
        src="https://media.istockphoto.com/photos/the-chef-slicing-vegetables-picture-id664845672?k=20&m=664845672&s=612x612&w=0&h=kwzdYf5405Gv5WGhf2hGmIoZhTuQ_k9j6s0vQLPwmSU="
        class="block w-full"
        alt="..."
      /></center>
      <div class="carousel-caption hidden md:block absolute text-center">
      
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
    <center>
      <img style={{width:"450px"}}
        src="https://img.freepik.com/free-photo/closeup-shot-chef-cooking-with-blurred-background_181624-30759.jpg"
        class="block w-full"
        alt="..."
      /></center>
      <div class="carousel-caption hidden md:block absolute text-center">
        
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
</div>
    



</div>
</a>





<br></br>


            <br></br>
            <br></br>
            <br></br>     
            
            
            
            
            
            
            
            
           
            
             
            <FoodHomeFotter/>
            
            
            </section>


    );

};