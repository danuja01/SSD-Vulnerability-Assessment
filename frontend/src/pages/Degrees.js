
import React, { useState, useEffect } from 'react';

// component

import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import DegreeCard from '../components/DegreeCard';
import DegreeHeader from '../components/DegreeHeader';


//hooks
import useFetch from '../hooks/useFetch';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Degrees = () => {
  const { admin } = useAuthContext();

  //navigation
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
      return;
    }
  }, [admin, navigate]);

  const { data, isPending, error } = useFetch(
    'http://localhost:4000/api/degrees'
  );

  const [query, setQuery] = useState('');


  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <DegreeHeader />
        <div className='ml-12 mt-2'>
          <input
            type='text'
            placeholder={`search`}
            onChange={(event) => setQuery(event.target.value)}
            className='ml-2 h-8 px-2 w-80 rounded-md border-gray-300 focus:outline-brown-100  border p-2'
            required
          />
        </div>

        <div
          id='slider'
          className='mt-4 mx-10 overflow-y-scroll scroll scroll scroll-smooth scrollbar-hide'
        >
          {error && (
            <div className='flex justify-center my-52'>
              <p className='text-red-600 text-2xl  border-2 px-10 py-4 border-red-600'>
                {error}
              </p>
            </div>
          )}
          {isPending && (
            <div className='mt-10 py-4 loading'>
              <div className='snippet' data-title='.dot-pulse'>
                <div className='stage'>
                  <div className='dot-pulse'></div>
                </div>
              </div>
            </div>
          )}
          <div className='grid grid-cols-2'>
            {data &&
              data
                // eslint-disable-next-line
                .filter((degree) => {
                  if (query === '') {
                    return degree;
                  } else if (
                    degree.degree_name
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  ) {
                    return degree;
                  }
                })
                .map((degree) => (
                  <DegreeCard key={degree.id} degree={degree} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Degrees;
