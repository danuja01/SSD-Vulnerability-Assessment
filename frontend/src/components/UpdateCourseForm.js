import axios from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import validUrl from 'valid-url';

const UpdateCourseForm = () => {
  const { id } = useParams();
  const [module_name, setMname] = useState('');
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const [lecturer, setLecturer] = useState('');
  const [notice, setNotice] = useState('');

  const navigate = useNavigate();

  const { data } = useFetch('http://localhost:4000/api/cmaterials/' + id);

  useEffect(() => {
    if (data) {
      setMname(data.module_name);
      setUrl(data.url);
      setDuration(data.duration);
      setLecturer(data.lecturer);
      setNotice(data.notice);
    }
  }, [data]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (validUrl.isUri(url)) {
      const courseDetails = {
        module_name,
        url,
        duration,
        lecturer,
        notice,
      };

      axios
        .patch(`http://localhost:4000/api/cmaterials/${id}`, courseDetails)
        .then(() => {
          console.log('degree updated');
          navigate(`/admin/Managecoursem`);
        });
    } else {
      alert('plese enter a valid URL!');
    }
  };

  return (
    <div className='mx-60'>
      <form onSubmit={handleUpdate}>
        <div className='px-4 py-5'>
          <label className='block text-sm font-medium text-gray-700'>
            Module name
          </label>
          <input
            type='text'
            value={module_name}
            onChange={(e) => setMname(e.target.value)}
            className='mt-1 w-full h-12 rounded-md border-gray-300 focus:outline-brown-100  border p-2'
            required
          />

          <label className='block text-sm font-medium text-gray-700 mt-6'>
            url
          </label>
          <input
            type='text'
            placeholder='http://example.com'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='mt-1 w-full h-12 rounded-md border-gray-300 focus:outline-brown-100  border p-2'
            required
          />

          <label className='block text-sm font-medium text-gray-700 mt-6'>
            Duration :
          </label>
          <input
            type='number'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className='mt-1 w-full h-12 rounded-md border-gray-300 focus:outline-brown-100  border p-2'
            required
          />

          <label className='block text-sm font-medium text-gray-700 mt-6'>
            Lecturer :
          </label>
          <input
            type='text'
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
            className='mt-1 w-full h-12 rounded-md border-gray-300 focus:outline-brown-100  border p-2'
            required
          />

          <label className='block text-sm font-medium text-gray-700 mt-4'>
            Notice :
          </label>

          <textarea
            className='
        form-control
        mt-1
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-brown-100 focus:border-2 focus:outline-none
      '
            rows='3'
            placeholder='(optional)'
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
          ></textarea>

          <div className='flex item-center justify-center'>
            <button
              type='submit'
              className=' mt-6   rounded-md border border-transparent bg-brown-100 py-2 px-7 text-sm font-medium text-white shadow-sm hover:bg-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-200 focus:ring-offset-2'
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourseForm;
