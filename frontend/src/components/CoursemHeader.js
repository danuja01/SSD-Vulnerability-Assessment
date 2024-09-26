const CoursemHeader = ({ title }) => {
  return (
    <div className='mt-10 mx-12 grid grid-cols-2'>
      <h2 className='text-2xl font-bold text-gray-900 justify-start flex'>
        {title}
      </h2>
    </div>
  );
};

export default CoursemHeader;
