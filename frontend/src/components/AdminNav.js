import React, { useEffect, useState } from 'react';

import { useAuthContext } from '../hooks/useAuthContext';

// icons
import { MdOutlineDashboard } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { MdInventory } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';
import { BiMessageAdd } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';
import { BiBookAlt } from 'react-icons/bi';
import { FaUsersCog } from 'react-icons/fa';

import { Link } from 'react-router-dom';
const AdminNav = () => {
  const { admin } = useAuthContext();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    console.log(admin.email);
    if (admin.email === 'admin@admin.com') {
      setHidden(false);
    }
  }, []);

  const menus = [
    {
      name: 'Dashboard',
      link: '/admin/dashboard',
      icon: MdOutlineDashboard,
      display: '',
    },
    {
      name: 'Employee',
      link: '/admin/all-employee',
      icon: MdWork,
      display: '',
    },
    {
      name: 'Degrees',
      link: '/admin/degrees',
      icon: GiGraduateCap,
      display: '',
    },
    {
      name: 'Course Materials',
      link: '/admin/Managecoursem',
      icon: BiBookAlt,
      display: '',
    },
    {
      name: 'Applications',
      link: '/admin/applications',
      icon: BiMessageAdd,
      display: '',
    },
    {
      name: 'Inventory',
      link: '/admin/allItems',
      icon: MdInventory,
      display: '',
    },
    { name: 'Food Items', link: '/admin/foods', icon: IoFastFood, display: '' },
    {
      name: 'Payments',
      link: '/admin/payments',
      icon: MdOutlinePayment,
      display: '',
    },
    {
      name: 'Libarary',
      link: '/libHome',
      icon: FaBookOpen,
      display: '',
    },
    {
      name: 'Settings',
      link: '/admin/signup',
      icon: FaUsersCog,
      display: hidden ? 'hidden' : '',
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-[#4F310E] min-h-screen ${
        open ? 'w-72' : 'w-16'
      } duration-500 text-gray-100 px-4`}
    >
      <div className='py-3 flex justify-end'>
        <HiMenuAlt3
          size={26}
          className='cursor-pointer'
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className='mt-4 flex flex-col gap-4 relative'>
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={` ${
              menu?.margin && 'mt-5'
            } group flex items-center text-sm pr-7 gap-.5 font-medium p-2 hover:bg-brown-200 rounded-md ${
              menu?.display
            }`}
          >
            <div>{React.createElement(menu?.icon, { size: '20' })}</div>
            <h2
              className={`whitespace-pre duration-300 pl-4 ${
                !open && 'opacity-0 translate-x-10 overflow-hidden'
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && 'hidden'
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:w-fit z-10 `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AdminNav;
