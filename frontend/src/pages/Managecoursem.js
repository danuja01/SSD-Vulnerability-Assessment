import { useEffect, useState } from 'react';
import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import CourseCard from '../components/CourseCard';
import Managecourseheader from '../components/Managecourseheader';

const Managecoursem = () => {
  const [cmaterials, setCmaterials] = useState(null);
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
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <Managecourseheader />
        <div
          id='slider'
          className='mt-5 mx-12 overflow-y-scroll scroll scroll scroll-smooth scrollbar-hide'
        >
          <div style={{ width: '500px' }}>
            {cmaterials &&
              cmaterials.map((cm) => <CourseCard cmaterial={cm} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Managecoursem;
