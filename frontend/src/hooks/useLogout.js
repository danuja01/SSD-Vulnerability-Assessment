import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove user from local storage
    localStorage.removeItem('admin');

    //dispatch logout action
    dispatch({ type: 'LOGOUT' });

    //redirect to login page
    window.location.replace('/admin/login');
  };

  return { logout };
};
