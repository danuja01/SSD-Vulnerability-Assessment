import { Link } from 'react-router-dom';

const CourceCard = ({ cmaterial }) => {
  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete?')) {
      console.log(`http://localhost:4000/api/cmaterials/${cmaterial._id}`);
      fetch(`http://localhost:4000/api/cmaterials/${cmaterial._id}`, {
        method: 'DELETE',
      }).then(window.location.reload());
    }
  };

  return (
    <div class='p-6 m-8 ml-2 mb-5 border border-gray-50 bg-white rounded-lg  shadow-md '>
      <h3 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 max-w'>
        {cmaterial.module_name}
      </h3>
      <p class=' font-normal text-gray-400'>Duration- {cmaterial.duration}hr</p>
      <p class='mb-3 font-normal text-gray-400'>
        Lecturer - {cmaterial.lecturer}
      </p>
      <div className=' grid grid-cols-3'>
        <Link
          to={`/admin/updateCourse/${cmaterial._id}`}
          class=' w-28 py-2.5 px-3 text-sm font-medium text-center text-white bg-brown-100 rounded-lg hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-brown-300 '
        >
          UPDATE
        </Link>
        <button
          onClick={handleDelete}
          class='w-28 py-2.5 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 '
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default CourceCard;
