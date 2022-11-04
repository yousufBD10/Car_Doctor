import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h className='text-center text-5xl'>Loading...</h>
    }
    if(user){
        return children;

    }
    return  <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;