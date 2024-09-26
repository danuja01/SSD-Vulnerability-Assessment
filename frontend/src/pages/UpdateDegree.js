import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import DegreeFormHeader from '../components/DegreeFormHeader';
import UpdateDegreeForm from '../components/UpdateDegreeForm';

const UpdateDegree = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <DegreeFormHeader />
        <UpdateDegreeForm />
      </div>
    </section>
  );
};

export default UpdateDegree;
