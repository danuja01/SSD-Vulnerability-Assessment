import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    await axios
      .post('http://localhost:4000/api/admin/signup', {
        email,
        password,
      })
      .then((response) => {
        // localStorage.setItem('admin', JSON.stringify(response.data));

        // set user in context
        // dispatch({ type: 'LOGIN', payload: response.data });

        alert('New Admin Created Successfully');

        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setIsLoading(false);
      });
  };

  return { signup, isLoading, error };
};
