import { Link } from 'react-router-dom';

const CoursemCard = ({ cmaterial }) => {
  return (
    <div class='p-6 m-2 my-5 bg-white rounded-lg border border-gray-200 shadow-md'>
      <h3 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 max-w'>
        {cmaterial.module_name}
      </h3>
      <p class=' font-normal text-black-400'>
        Duration : {cmaterial.duration} Hr
      </p>
      <p class='mb-3 font-normal text-black-400'>
        Lecturer : {cmaterial.lecturer}
      </p>
      <div className='flex items-end justify'>
        <a
          href={cmaterial.url}
          class=' w-28 py-2.5 px-3 text-sm font-medium text-center text-white bg-brown-100 rounded-lg hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-blue-300 '
        >
          WATCH
        </a>
      </div>
    </div>
  );
};

export default CoursemCard;
