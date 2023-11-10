import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const rol = localStorage.getItem('rol');

  // Dentro del componente PrivateRoute
console.log('isLoggedIn', isLoggedIn);
console.log('rol', rol);

  if (!isLoggedIn) return <Navigate to="/signin" />;
  if (rol != 'ADMIN') {
    return <Navigate to="/" />
  }else{
    return element
  }
  return <Outlet />
};


