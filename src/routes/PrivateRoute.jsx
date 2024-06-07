import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)

    const location = useLocation();

    if(loader){
        return <span className="loading loading-spinner loading-md"></span>
    }


    if(user){
        return children;
    }

    return (
        <Navigate state={{from:location}} to='/login'></Navigate>
    );
};

export default PrivateRoute;
