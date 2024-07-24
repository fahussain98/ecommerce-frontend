import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function Privatecomp () {
    let user = localStorage.getItem('user')
  return (
    
    
    user  ? <Outlet />: <Navigate to = "/Sign"/>  )
}

export default Privatecomp;
