import React from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router';

const PrivetRoute = ({children}) => {
    
    const {user, loading} = useAuth()
    const navigate = useNavigate()

    if(loading){
       return <span className="loading loading-spinner text-primary"></span>
    }

    if(!user){
        navigate('/login')
    }

    return children
};

export default PrivetRoute;