import React from 'react';

export default function MainHeaderNav() {
  return (
    <nav class='bg-white border-gray-100 px-2 sm:px-0 py-2.5  dark:bg-white'>
      <div class='container flex flex-wrap justify-between  mx-auto'>
        <a href='https://flowbite.com/' class='flex items-center'>
          <img
            src='https://res.cloudinary.com/hiruniherath/image/upload/v1665041791/Peachpuff_Brush_Stroke_Photography_Logo_2_ebgo7t.png'
            class=' h-30 sm:h-20'
            alt='logo'
          />
        </a>

        <div class='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul class='flex flex-col p-4 mt-4 bg-white rounded-lg border border-gray-100 md:flex-row md:space-x-20 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
            <li>
              <a
                href='/'
                class='  text-black  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/coursem'
                class='  text-black  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent'
              >
                Course Materials
              </a>
            </li>
            <li>
              <a
                href=''
                class='  text-black  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent'
              >
                Library Access
              </a>
            </li>
            <li>
              <a
                href=''
                class='  text-black  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent'
              >
                Food Management
              </a>
            </li>
            <li>
              <a
                href=''
                class=' text-black  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=''
                class='  text-black  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
