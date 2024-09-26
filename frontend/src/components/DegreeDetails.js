import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

//hooks
import useFetch from '../hooks/useFetch';

//material ui dialog box
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useState } from 'react';
import axios from 'axios';

import { useAuthContext } from '../hooks/useAuthContext';

const DegreeDetails = () => {
  const { admin } = useAuthContext();

  const { id } = useParams();
  const [open, setOpen] = useState(false);

  //navigation
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
      return;
    }
  }, [admin, navigate]);

  //handle dialog box open
  const handleClickToOpen = () => {
    setOpen(true);
  };

  //handle dialog box close
  const handleToClose = () => {
    setOpen(false);
  };

  const {
    data: degree,
    isPending,
    error,
  } = useFetch(`http://localhost:4000/api/degrees/${id}`);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/degrees/${degree._id}`, {
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      })
      .then(() => {
        navigate('/admin/degrees');
      });
  };

  return (
    <div class='max-w p-6 m-8 ml-2 mb-5 border border-gray-50 bg-white rounded-lg  shadow-md '>
      {error && <p className='text-center text-red-600'>{error}</p>}
      {isPending && (
        <div className='loading'>
          <div className='snippet' data-title='.dot-pulse'>
            <div className='stage'>
              <div className='dot-pulse'></div>
            </div>
          </div>
        </div>
      )}
      {degree && (
        <div>
          <h3 class='mt-11 text-2xl font-bold tracking-tight text-gray-900 text-center'>
            {degree.degree_name}
          </h3>

          <h4 className='text-gray-900 leading-9'>
            Stream: {degree.streams.map((stream) => stream).join(', ')}
          </h4>
          <h4 className='text-gray-900 leading-9'>
            Minimum Z-SCORE : {degree.z_score}
          </h4>
          <h4 className='text-gray-900 mb-5 leading-9'>
            Duration : {degree.duration} Years
          </h4>
          <div
            id='slider'
            className='mt-3 h-64 overflow-y-scroll scroll scroll scroll-smooth scrollbar-none'
          >
            <p className='text-gray-900 leading-9 mb-9 text-justify'>
              {degree.description}
            </p>
          </div>
          <div className='mt-4 flex justify-end'>
            <Link
              to={`/admin/degree/update/${degree._id}`}
              class='mr-2  w-30 py-3.5 px-7 text-sm font-medium text-center text-white bg-brown-100 rounded-lg hover:bg-brown-200 focus:ring-4 focus:outline-none focus:ring-brown-300 '
            >
              UPDATE
            </Link>

            <button
              class='w-30 py-3.5 px-7 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300'
              onClick={handleClickToOpen}
            >
              DELETE
            </button>
            <Dialog open={open} onClose={handleToClose}>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to continue?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button
                  className='text-green-400 pr-2 mb-2 text-sm rounded-md'
                  onClick={handleDelete}
                >
                  CONFIRM
                </button>
                <button
                  className='  text-red-400  pr-4 mb-2 text-sm rounded-md'
                  onClick={handleToClose}
                >
                  CANCEL
                </button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
};

export default DegreeDetails;
