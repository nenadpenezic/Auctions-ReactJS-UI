import React from 'react'
import { Navigate } from 'react-router-dom';



export const ProtectedRoute = ({user,children,isAuthReq}) => {
  

  if (user && !user.isAccountComplete)
    return (
      <Navigate to='/complete'/>
    )
  
  if (isAuthReq && !user)
    return (
      <Navigate to='/login'/>
    )
    
    return children
}
