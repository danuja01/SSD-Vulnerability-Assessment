import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import DegreeCard from '../components/DegreeCard';
import DegreeHeader from '../components/DegreeHeader';

const Dashboard = () => {
  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <DegreeHeader />
        <div
          id='slider'
          className='mt-5 mx-12 overflow-y-scroll scroll scroll scroll-smooth scrollbar-hide'
        >
          <div className='grid grid-cols-2'>
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
            <DegreeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
