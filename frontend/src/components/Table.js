import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import exportFromJSON from 'export-from-json';
import { AiFillFileExcel } from 'react-icons/ai';

//material ui dialog box
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const Table = ({ selectedStudents }) => {
  //fetch data
  const { data, isPending, error } = useFetch(
    'http://localhost:4000/api/applied-students/'
  );

  //set states
  const [preference, setPreference] = useState(0);
  const [open, setOpen] = useState(false);
  const [mailto, setMailto] = useState({});
  const [selectedStudent, setSelectedStudent] = useState({});
  const [studentId, setStudentId] = useState('');
  const [dialogBox, setDialogBox] = useState('');
  const [confirming, setConfirming] = useState(false);
  const isZscore = [];

  //handle dialog box open
  const handleClickToOpen = () => {
    setOpen(true);
  };

  //handle dialog box close
  const handleToClose = () => {
    setOpen(false);
  };

  //handle z-score
  data &&
    data.forEach((data) => {
      // console.log(data.degree[preference].z_score);
      if (data.student.z_score >= data.degree[preference].z_score) {
        isZscore.push('bg-green-100');
      } else {
        isZscore.push('bg-red-100');
      }
      // console.log(isZscore);
    });

  //handle accepts
  const handleAccept = (mailto, selectedStudent) => {
    // console.log(e);
    setConfirming(true);
    axios
      .post('http://localhost:4000/api/selected-students', selectedStudent)
      .then(
        emailjs
          .send(
            'service_na3ahko',
            'template_6mdust6',
            mailto,
            'NEGeKLJA2XemKMAcM'
          )
          .then(
            (result) => {
              setConfirming(false);
              handleReject(mailto._id)
                .then(alert('Student Accepted & Email sent successfully'))
                .then(window.location.reload())
                .catch((err) => {
                  console.log(err);
                });
            },
            (error) => {
              alert('Email not sent');
            }
          )
      )
      .catch((err) => {
        console.log(err);
      });
  };

  //handle rejects
  const handleReject = (id) => {
    axios
      .delete(`http://localhost:4000/api/applied-students/${id}`)
      .then(window.location.reload())
      .catch((err) => {
        console.log(err);
      });
  };

  //handle csv
  const ExportXLXS = () => {
    const fileName = 'selected students list';
    const exportType = 'csv';
    const data = selectedStudents;
    exportFromJSON({ data, fileName, exportType });
  };

  return (
    <div className='mx-12 mt-5'>
      {error && (
        <div className='flex justify-center my-52'>
          <p className='text-red-600 text-2xl  border-2 px-10 py-4 border-red-600'>
            404 : {error}
          </p>
        </div>
      )}
      {isPending && (
        <div className='mt-10  py-4 loading'>
          <div className='snippet' data-title='.dot-pulse'>
            <div className='stage'>
              <div className='dot-pulse'></div>
            </div>
          </div>
        </div>
      )}
      {data && (
        <div>
          <div className='flex justify-between items-end'>
            {/* SELECTION MENUE */}
            <div className='inline-block  relative w-64 mb-3'>
              <select
                onChange={(event) => setPreference(event.target.value)}
                className='block appearance-none w-full  bg-gray-50 border border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value={0}>1st Preference</option>
                <option value={1}>2nd Preference</option>
                <option value={2}>3rd Preference</option>
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
            {/* END SELECTION MENUE */}

            {/* EXCEL SHEET */}

            <button
              className='shadow-md bg-green-800 px-4 rounded-md text-white h-9 mb-3 active:bg-green-600'
              onClick={ExportXLXS}
            >
              <AiFillFileExcel className='inline-block pb-1 mr-1' size={20} />
              Selected Students
            </button>
          </div>

          {/* TABLE */}
          <table className='table-auto w-full text-left'>
            <thead className='border-b bg-brown-300 text-white text-sm font-medium '>
              <th className='px-6 py-4 w-80'>Index Number</th>
              <th className='px-6 py-4 w-44'>Z-Score</th>
              <th className='px-6 py-4 w-96'>Applied Degree</th>
              <th className='px-6 py-4 w-32'>Required Z-Score</th>
              <th className='px-6 py-4 w-16'></th>
              <th className='px-6 py-4 w-16'></th>
            </thead>
            <tbody>
              {data.map((data, index) => {
                return (
                  <tr key={data._id} className='bg-white border-b'>
                    <td className='px-6 py-4'>
                      <h3>{data.student.index_number}</h3>
                      <p className='text-xs text-gray-400'>
                        {data.student.student_name}
                      </p>
                    </td>
                    <td className={`px-6 py-4 ${isZscore[index]}`}>
                      {data.student.z_score}
                    </td>
                    <td
                      className={`px-6 py-4`}
                      value={data.degree[preference]._id}
                    >
                      {data.degree[preference].degree_name}
                    </td>
                    <td className='px-6 py-4'>
                      {data.degree[preference].z_score}
                    </td>
                    <td className='px-6 py-4'>
                      <button
                        className='bg-green-600 p-2 w-full  rounded-sm text-gray-50 mr-5'
                        onClick={(e) => {
                          setDialogBox('assign');
                          setMailto({
                            _id: data._id,
                            user_email: data.student.email,
                            student_name: data.student.student_name,
                            degree_name: data.degree[preference].degree_name,
                          });

                          setSelectedStudent({
                            student: data.student,
                            degree: data.degree[preference],
                          });

                          handleClickToOpen();
                        }}
                      >
                        ASSIGN
                      </button>
                    </td>
                    <td className='px-1 pr-6 py-4'>
                      <button
                        className='bg-red-500 p-2 w-full rounded-sm text-white mr-5'
                        onClick={(e) => {
                          setDialogBox('reject');
                          setStudentId(data._id);
                          handleClickToOpen();
                        }}
                      >
                        REJECT
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* END TABLE */}
        </div>
      )}

      <Dialog open={open} onClose={handleToClose}>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {!confirming && (
            <button
              className='text-green-400 pr-2 mb-2 text-sm rounded-md'
              onClick={(e) => {
                if (dialogBox === 'assign') {
                  handleAccept(mailto, selectedStudent);
                } else {
                  handleReject(studentId);
                }
              }}
            >
              CONFIRM
            </button>
          )}
          {confirming && (
            <button
              disabled={true}
              className='text-green-800 pr-2 mb-2 text-sm rounded-md'
            >
              CONFIRMING...
            </button>
          )}
          <button
            className='  text-red-400  pr-4 mb-2 text-sm rounded-md'
            onClick={handleToClose}
          >
            CANCEL
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Table;
