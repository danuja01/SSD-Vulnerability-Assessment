import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    await axios
      .post('http://localhost:4000/api/admin/login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('admin', JSON.stringify(response.data));

        // set user in context
        dispatch({ type: 'LOGIN', payload: response.data });

        setIsLoading(false);

        // redirect to dashboard page
        window.location.replace('/admin/dashboard');
      })
      .catch((err) => {
        setError(err.response.data.error);
        setIsLoading(false);
      });
  };

  return { login, isLoading, error };
};
