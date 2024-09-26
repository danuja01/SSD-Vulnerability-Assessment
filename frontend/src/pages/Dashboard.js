import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//hooks
import { useAuthContext } from '../hooks/useAuthContext';

// components
import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';

const Dashboard = () => {
  //hooks
  const { admin } = useAuthContext();

  //navigation
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
      return;
    }
  }, [admin, navigate]);

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <br></br>
        <h1 className='text-2xl font-bold text-gray-900 justify-start flex'>
          {' '}
          ADMIN DASHBOARD{' '}
        </h1>
        <br></br>
        <br></br>
        <h4 class='text-2xl font-bold text-gray-900 text-center '>
          ---Avaliable facilities List---
        </h4>
        <br></br>
        <br></br>
        <div class='grid grid-cols-4 gap-4'>
          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>Degrees</div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    Includes all the Avaliable degrees and details
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>

          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>
                  Course Materials
                </div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    Student essential study item lists details
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>

          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>Students</div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    includes list of students and their details
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>

          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>
                  Applications
                </div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    Enrollment students lists and all details
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class='grid grid-cols-4 gap-4'>
          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>Inventory</div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    records of Inventory items and the management
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>

          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>Food items</div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    Includes Avalible food lists and management
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>

          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>Payments</div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    Financial details and records are Avaliable.
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>

          <div>
            <div class='flex justify-center'>
              <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
                <div class='py-3 px-6 border-b border-gray-300'>Libarary</div>
                <div class='p-6'>
                  <p class='text-gray-700 text-base mb-4'>
                    With all the libary items and facilities are Avaliable
                  </p>
                </div>
                <div class='py-3 px-6 border-t border-gray-300 text-white dark:bg-[#4F310E]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
