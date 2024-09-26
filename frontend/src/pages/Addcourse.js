import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import CourseForm from '../components/Courseform';
import CoursemHeader from '../components/CoursemHeader';

const Addcourse = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <CoursemHeader title={'ADD A COURSE MATERIAL'} />
        <CourseForm />
      </div>
    </section>
  );
};

export default Addcourse;
