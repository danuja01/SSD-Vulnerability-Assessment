//components
import AdminHeader from '../components/AdminHeader';
import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';
import Table from '../components/Table';

//hooks
import useFetch from '../hooks/useFetch';

const Applications = () => {
  const { data: selectedStudents } = useFetch(
    'http://localhost:4000/api/selected-students'
  );

  const student = [];

  selectedStudents &&
    selectedStudents.forEach((data) => {
      student.push({
        index: data.student.index_number,
        name: data.student.student_name,
        subject_stream: data.student.subject_stream,
        z_score: data.student.z_score,
        email: data.student.email,
        degree: data.degree.degree_name,
      });
    });

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <AdminHeader title='Applications' />
        <p className='mx-12 text-xs w-86 text-red-500'>
          *EXCEPTS FOR STUDENTS WITH FAKE DETAILS, DO NOT REJECT APPLICATIONS
          UNTIL U COMPARE QUALIFICATIONS WITH EACH AND EVERY DEGREE IN
          PREFERENCE LIST
        </p>

        {/* TABLE */}
        <Table selectedStudents={student} />
      </div>
    </section>
  );
};

export default Applications;
