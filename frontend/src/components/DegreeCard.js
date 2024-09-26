
import { Link } from 'react-router-dom';

const DegreeCard = ({ degree }) => {
  const streams = degree.streams.map((stream) => stream).join(', ');

  return (
    <div className='p-6 m-8 ml-2 mb-5 border border-gray-50 bg-white rounded-lg  shadow-md '>
      <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 max-w h-16'>
        {degree.degree_name}
      </h3>
      <p className=' font-normal text-gray-400'>
        Minimum Z-score - {degree.z_score}
      </p>
      <p className='mb-3 font-normal text-gray-400'>
        Subject streams - {streams}
      </p>
      <div className='flex justify-end'>
        <Link
          to={`/admin/degree/${degree._id}`}
          className=' w-28 py-2.5 px-3 text-sm font-medium text-center text-white bg-brown-100 rounded-lg hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-brown-500 '
        >
          View More
        </Link>

      </div>
    </div>
  );
};

export default DegreeCard;
