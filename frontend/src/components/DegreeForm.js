
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//icons
import { MdOutlineReportProblem } from 'react-icons/md';

//hooks
import { useAuthContext } from '../hooks/useAuthContext';

//material ui dialog box
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const DegreeForm = () => {
  //hooks
  const { admin } = useAuthContext();

  //fetch data
  const [degree_name, setDegree] = useState('');
  const [z_score, setZscore] = useState('');
  const [duration, setDuration] = useState(0);
  const [streams, setStream] = useState([]);
  const [description, setDescription] = useState('');

  //set states
  const [isPending, setIsPending] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
      return;
    }
  }, [admin, navigate]);

  //handle dialog box close
  const handleToClose = () => {
    setOpen(false);
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      degree_name === '' ||
      z_score === '' ||
      duration === 0 ||
      streams.length === 0 ||
      description === ''
    ) {
      setIsEmpty(true);
      setOpen(true);
      setError('Please fill all the required fields');
    } else if (z_score > 3.0) {
      setOpen(true);
      setError('Please enter a valid z-score ');
    } else {
      const degreeDetails = {
        degree_name,
        z_score,
        duration,
        streams,
        description,
      };

      setIsPending(true);

      setTimeout(() => {
        axios
          .post('http://localhost:4000/api/degrees', degreeDetails, {
            headers: {
              Authorization: `Bearer ${admin.token}`,
            },
          })
          .then(() => {
            console.log('new degree added');
            setIsPending(false);
            navigate('/admin/degrees');
          })
          .catch((err) => {
            setError(err.response.data.message);
            setIsPending(false);
          });
      }, 1000);
    }
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setStream([...streams, e.target.value]);
    } else {
      setStream(streams.filter((stream) => stream !== e.target.value));
    }
  };

  return (
    <div className='mx-60 pt-1'>
      {error && (
        <Dialog open={open} onClose={handleToClose}>
          <DialogContent>
            <p>
              <MdOutlineReportProblem
                className='inline-flex mb-1 mr-2'
                color='#8B8000'
              />
              {error}!
            </p>
          </DialogContent>
          <DialogActions>
            <button
              className='  text-red-600  pr-4 mb-2 text-sm rounded-md'
              onClick={handleToClose}
            >
              CLOSE
            </button>
          </DialogActions>
        </Dialog>
      )}
      <form onSubmit={handleSubmit}>
        <div className='px-4 pt-1 pb-5'>

          <label
            htmlFor='degree'
            className='block text-sm font-medium text-gray-700'
          >

            <i
              className={`inline float-left mr-2  ${
                isEmpty && degree_name === '' ? 'text-red-600' : ''
              }`}
            >
              *
            </i>

            Degree
          </label>
          <input
            type='text'

            value={degree_name}
            onChange={(e) => setDegree(e.target.value)}
            placeholder='Add a Degree Program'
            className={`mt-1 w-full h-12 rounded-md focus:outline-brown-100  border p-2 ${
              degree_name === '' && isEmpty
                ? 'border-red-600'
                : 'border-gray-300'
            }`}
            // required

          />

          <label
            htmlFor='z-score'
            className='block text-sm font-medium text-gray-700 mt-6'
          >

            <i
              className={`inline float-left mr-2  ${
                isEmpty && z_score === '' ? 'text-red-600' : ''
              }`}
            >
              *
            </i>

            Maximum z-score
          </label>
          <input
            type='number'

            value={z_score}
            onChange={(e) => {
              setZscore(e.target.value);
            }}
            placeholder='z-score'
            className={`mt-1 w-full h-12 rounded-md focus:outline-brown-100  border p-2 ${
              z_score === '' && isEmpty ? 'border-red-600' : 'border-gray-300'
            }`}
            // required
          />
          <div className='h-2'>
            {z_score > 3 && (
              <i className='text-xs mt-1 text-red-600'>
                z-score should be less than 3
              </i>
            )}
          </div>

          <label
            htmlFor='duration'
            className='block text-sm font-medium text-gray-700 mt-5'
          >
            <i
              className={`inline float-left mr-2  ${
                isEmpty && duration === 0 ? 'text-red-600' : ''
              }`}
            >
              *
            </i>
            Course Duration :
          </label>
          <div className='inline-block relative w-64 mt-1'>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className={`block appearance-none w-full h-12 bg-gray-50 border hover:border-brown-100 hover:border-2 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline  ${
                duration === 0 && isEmpty ? 'border-red-600' : 'border-gray-300'
              }`}
            >
              <option value={0} disabled>
                Select Duration
              </option>
              <option value={2}>2 Years</option>
              <option value={3}>3 Years</option>
              <option value={4}>4 Years</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <svg
                className='fill-current h-4 w-4'

                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
          </div>

          <label
            htmlFor='streams'
            className='block text-sm font-medium text-gray-700 mt-6'
          >

            <i
              className={`inline float-left mr-2  ${
                isEmpty && streams.length === 0 ? 'text-red-600' : ''
              }`}
            >
              *
            </i>
            Subject Streams :
            {isEmpty && streams.length === 0 ? (
              <p className='inline ml-2 text-xs  text-red-600'>
                {'(required)'}
              </p>
            ) : (
              ''
            )}
          </label>

          <div className='grid justify-center grid-cols-3'>
            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Physical Science'
                onChange={(e) => handleCheck(e)}
                name='pScience'
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='pScience'

              >
                Physical Science
              </label>
            </div>

            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Commerce'
                onChange={(e) => handleCheck(e)}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'

              >
                Commerce
              </label>
            </div>

            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Languages'
                onChange={(e) => handleCheck(e)}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'

              >
                Languages
              </label>
            </div>

            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Arts'
                onChange={(e) => handleCheck(e)}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'

              >
                Arts
              </label>
            </div>

            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Technology'
                onChange={(e) => handleCheck(e)}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'

              >
                Technology
              </label>
            </div>

            <div className='form-check mt-5'>
              <input
                className='form-check-input appearance-none h-7 w-7 border border-gray-300 rounded-lg bg-white checked:bg-brown-100 checked:border-brown-100 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                type='checkbox'
                value='Biology'
                onChange={(e) => handleCheck(e)}
              />
              <label
                className='form-check-label inline-block text-gray-800 '
                htmlFor='flexCheckDefault'

              >
                Biology
              </label>
            </div>
          </div>

          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700 mt-4'
          >

            <i
              className={`inline float-left mr-2  ${
                isEmpty && description === '' ? 'text-red-600' : ''
              }`}
            >
              *
            </i>

            Degree Description :
          </label>

          <textarea

            className={`

        form-control
        mt-1
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding

        border border-solid

        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-brown-100 focus:border-2 focus:outline-none

        ${description === '' && isEmpty ? 'border-red-600' : 'border-gray-300'}
      `}
            rows='3'
            placeholder='Description'
            name='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <div className='flex item-center justify-center'>
            {!isPending && (
              <button
                type='submit'
                className=' mt-6   rounded-md border border-transparent bg-brown-100 py-2 px-7 text-sm font-medium text-white shadow-sm hover:bg-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-200 focus:ring-offset-2'
              >
                SUBMIT
              </button>
            )}
            {isPending && (
              <button
                type='submit'
                className=' mt-6   rounded-md border border-transparent bg-brown-500 py-2 px-7 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-brown-200 focus:ring-offset-2'
                disabled
              >
                Loading...
              </button>
            )}

          </div>
        </div>
      </form>
    </div>
  );
};

export default DegreeForm;
