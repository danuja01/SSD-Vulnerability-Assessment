import { useEffect, useState } from 'react';
import axios from 'axios';

// hooks
import { useAuthContext } from '../hooks/useAuthContext';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const { admin } = useAuthContext();

  useEffect(() => {
    const abortCont = new AbortController();

    console.log('check ' + admin);

    setTimeout(() => {
      if (!admin) {
        const err = 'Authorization failed';
        setError(err);
        setIsPending(false);
        return;
      }
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        })
        .then((response) => {
          if (!response.data) {
            throw Error('Could not fetch the data for that resorce');
          } else {
            setData(response.data);
            setIsPending(false);
            setError(null);
          }
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch abort');
          } else {
            setError(err.response.data.error);
            setIsPending(false);
          }
        });

      return () => abortCont.abort();
    }, 500);
  }, [url, admin]);

  return { data, isPending, error };
};

export default useFetch;
