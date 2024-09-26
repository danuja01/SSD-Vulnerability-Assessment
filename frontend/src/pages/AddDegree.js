import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import DegreeForm from '../components/DegreeForm';
import DegreeFormHeader from '../components/DegreeFormHeader';

const AddDegree = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <DegreeFormHeader />
        <DegreeForm />
      </div>
    </section>
  );
};

export default AddDegree;
