import AdminName from '../components/AdminName';
import AdminNav from '../components/AdminNav';

import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

import { BsFillExclamationCircleFill } from 'react-icons/bs';

// //material ui dialog box
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [open, setOpen] = useState(false);
  const [type, setType] = useState('password');

  const { signup, isLoading, error } = useSignup();

  //handle dialog box close
  // const handleToClose = () => {
  //   setOpen(false);
  // };

  // const handleToOpen = () => {
  //   setOpen(true);
  //   setEmail('');
  //   setPassword('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(email.toLowerCase());
    console.log(email);

    await signup(email, password);
  };

  return (
    <section className='flex gap-6'>
      <AdminNav />
      <div className='w-full mr-12'>
        <AdminName />
        <div className='flex justify-center '>
          <h1 className=' text-2xl font-bold mt-8 text-center'>
            ADD NEW ADMINISTRATIVE ACCOUNTS
          </h1>
        </div>
        <div class='flex flex-col items-center justify-center px-6 mt-20 mx-auto '>
          <div class='w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 '>
            <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                Create and account
              </h1>
              <form class='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900'
                  >
                    e-mail
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-brown-100'
                    placeholder='name@mail.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    for='password'
                    class='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Password
                  </label>
                  <input
                    type={type}
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-brown-100'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />

                  <div className='flex justify-end'>
                    <input
                      type='checkbox'
                      className='mt-2'
                      onClick={() => {
                        setType(type === 'password' ? 'text' : 'password');
                      }}
                    />
                    <label className='mt-2 ml-2'>Show Password</label>
                  </div>
                </div>
                {/* <div>
                <label
                  for='confirm-password'
                  class='block mb-2 text-sm font-medium text-gray-900'
                >
                  Confirm password
                </label>
                <input
                  type='confirm-password'
                  name='confirm-password'
                  id='confirm-password'
                  placeholder='••••••••'
                  class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  required=''
                />
              </div> */}

                <button
                  type='submit'
                  class='w-full bg-brown-100 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Create Account'}
                </button>
                {error && (
                  <div
                    id='error'
                    className=' border p-1 border-red-600 rounded-md pl-2 bg-red-100 flex'
                  >
                    <BsFillExclamationCircleFill
                      size={15}
                      className='text-red-600 mt-0.5 mr-2'
                    />
                    <p className='text-red-600 text-sm'> {error}</p>

                    <i
                      className='text-red-600 text-sm text-right flex-1 justify-end mr-2 mb-0.5 cursor-pointer'
                      onClick={() => {
                        document.querySelector('#error').style.display = 'none';
                      }}
                    >
                      x
                    </i>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <Dialog open={open} onClose={handleToClose}>
        <DialogContent>
          <p>Admin Account Added Succesfully!</p>
        </DialogContent>
        <DialogActions>
          <button
            className='  text-green-600  pr-4 mb-2 text-sm rounded-md'
            onClick={handleToClose}
          >
            OK
          </button>
        </DialogActions>
      </Dialog> */}
    </section>
  );
};

export default AdminSignup;
