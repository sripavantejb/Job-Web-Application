import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProtectedRoute({ redirectTo = '/login', children }) {
  const token = Cookies.get('token');
  const isAuthenticated = Boolean(token);

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Support both wrapping children and route Outlet usage
  return children ? children : <Outlet />;
}

export default ProtectedRoute;


