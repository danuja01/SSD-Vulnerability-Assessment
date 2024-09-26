const { FiLogOut } = require('react-icons/fi');

const CoursemName = () => {
  return (
    <div className='mt-6 w-full'>
      <div className='text-2xl text-gray-700 grid grid-cols-2  items-center'>
        <h1 className=''>Good morning, Mr. Oshada! 👋</h1>
        <a href='/' className='flex justify-end '>
          <FiLogOut size={30} className='flex cursor-pointer' />
        </a>
      </div>
      <div class='w-full border-b border-gray-200 pt-2'></div>
    </div>
  );
};

export default CoursemName;
