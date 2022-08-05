import React from 'react'
import { useNavigate } from 'react-router-dom';



export const ProtectedRoute = ({user,children,isAuthReq}) => {
  const history = useNavigate();

  if (Object.keys(user).length !== 0 && !user.isAccountComplete)
    history("/complete")
  
  if (isAuthReq && Object.keys(user).length === 0)
    history("/login")
    
    return children
}
