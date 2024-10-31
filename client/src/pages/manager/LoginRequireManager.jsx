import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import { Navigate } from 'react-router-dom';

const LoginRequireManager = ({children}) => {
    const {currentUser} = useContext(AuthContext);

    if (!currentUser || currentUser.role !== 'manager') {
        return <Navigate to="/manager/login" />
    }

  return children;
}

export default LoginRequireManager