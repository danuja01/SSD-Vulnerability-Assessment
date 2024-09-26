import { useEffect, useState } from 'react';
import CoursemCard from '../components/CoursemCard';
import Header from '../components/MainHeaderNav';
import Footer from '../components/MainFooter';

const Coursem = () => {
  const [cmaterials, setCmaterials] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCmaterials = async () => {
      const response = await fetch('http://localhost:4000/api/cmaterials');
      const json = await response.json();

      if (response.ok) {
        setCmaterials(json);
      }
    };

    fetchCmaterials();
  }, []);

  return (
    <div className=''>
      <Header />
      <div className='mx-32 my-12 mb-64'>
        <div className=''>
          <input
            type='text'
            placeholder='search'
            onChange={(event) => setQuery(event.target.value)}
            className='mt-1 mx-2 h-12 px-2 w-96 rounded-md border-gray-300 border p-2'
            required
          />
        </div>

        {cmaterials &&
          cmaterials
            .filter((cm) => {
              if (query === '') {
                return cm;
              } else if (
                cm.module_name.toLowerCase().includes(query.toLowerCase())
              ) {
                return cm;
              }
            })
            .map((cm) => <CoursemCard cmaterial={cm} />)}
      </div>
      <Footer className='' />
    </div>
  );
};

export default Coursem;
