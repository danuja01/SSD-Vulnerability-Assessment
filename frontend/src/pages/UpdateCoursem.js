import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import CoursemHeader from '../components/CoursemHeader';
import UpdateCourseForm from '../components/UpdateCourseForm';

const UpdateCoursem = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <CoursemHeader title={'ADD A COURSE MATERIAL'} />
        <UpdateCourseForm />
      </div>
    </section>
  );
};

export default UpdateCoursem;
