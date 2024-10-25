import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import { Navigate } from 'react-router-dom';

const LoginRequire = ({children}) => {
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate to="/staff/login" />;
    }

  return children;
}

export default LoginRequire