import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import LoadingSpinner from '../LoadingSpinner';

const RouteLoading = ({children}) => {
    const location =  useLocation()
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const time = setTimeout(() => setLoading(false), 500);
        return ()=> clearTimeout(time)
    },[location])
   if(loading){
    return <LoadingSpinner></LoadingSpinner>
   }
  return <>{children}</>;
};

export default RouteLoading;