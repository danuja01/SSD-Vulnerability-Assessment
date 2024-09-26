import AdminNav from '../components/AdminNav';
import AdminName from '../components/AdminName';

export default function FoodItem() {
    return (
        <section className='flex gap-6'>
            <AdminNav />
            <div className='w-full mr-10'>
            <AdminName />

                <br></br>
                <br></br>
                <br></br>
                <table>
                    <tr>
                   <td>
                   <h2 className='text-2xl font-bold text-gray-900 justify-start flex'> Manage All Food Items </h2>
                   </td>
            <td>


                <img src='https://www.freeiconspng.com/thumbs/fast-food-png/related-icons-fast-food-icon-forbidden-to-eat-food-icon-hamburger-icon--27.png' style={{width:"45px"}}  >

                </img>
            </td>
                
                
                     
                </tr>
                </table>
                <br></br>
                <table>
                    <tr>
                        <td>
                            <a href="/admin/breakfastitems" class="block p-6 max-w-sm bg-[#f9f4ee] rounded-lg border dark:border-gray-700 shadow-xl" style={{ width: "450px" }}>


                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">BreakfastItems</h5>
                                <br></br>
                                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#4F310E] dark:text-white dark:border-gray-600 dark:hover:bg-[#696969] dark:hover:border-gray-600 dark:focus:ring-gray-700">Manage</button>
                            </a>

                        </td>

                        <td>
                            <a href="/admin/lunchitems" class="block p-6 max-w-sm bg-[#f9f4ee] rounded-lg border dark:border-gray-700 shadow-xl" style={{ width: "450px" }}>


                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Lunch Items</h5>
                                <br></br>
                                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#4F310E] dark:text-white dark:border-gray-600 dark:hover:bg-[#696969] dark:hover:border-gray-600 dark:focus:ring-gray-700">Manage</button>
                            </a>

                        </td>

                        <td>
                            <a href="/admin/Dinner" class="block p-6 max-w-sm bg-[#f9f4ee] rounded-lg border dark:border-gray-700 shadow-xl" style={{ width: "450px" }}>


                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Dinner Items</h5>
                                <br></br>
                                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#4F310E] dark:text-white dark:border-gray-600 dark:hover:bg-[#696969] dark:hover:border-gray-600 dark:focus:ring-gray-700">Manage</button>
                            </a>

                        </td>


                    </tr>

                </table>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                
                    <br></br>

        <h1 class="w3-sans-serif">Latest modifications</h1>
                <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Add new items to breakfastitems</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">New eroupe foods been added to the menu</p>
        
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Removed Dinner items</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Unwanted tamil food items were deleted from the database</p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Edit the existing lunch items</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">update the student requested item list on Lunch.</p>
    </li>
</ol>

























            </div>
        </section>
    );
};


