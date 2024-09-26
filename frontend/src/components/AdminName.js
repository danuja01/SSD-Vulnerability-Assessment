import { useLogout } from '../hooks/useLogout';

import { FiLogOut } from 'react-icons/fi';
import { useAuthContext } from '../hooks/useAuthContext';

const AdminName = () => {
  const { logout } = useLogout();
  const { admin } = useAuthContext();

  const handleCLick = () => {
    logout();
  };

  return (
    <div className='mt-6 w-full '>
      <div className='text-2xl text-gray-700 grid grid-cols-2  items-center'>
        {admin && <h1>{admin.email} 👋</h1>}
        {admin && (
          <button className='flex justify-end ' onClick={handleCLick}>
            <FiLogOut size={30} className='flex cursor-pointer' />
          </button>
        )}
      </div>
      <div className='w-full border-b border-gray-200 pt-2'></div>
    </div>
  );
};

export default AdminName;
