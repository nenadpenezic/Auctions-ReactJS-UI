import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='dashboard-panel-link-container'>
            <Link to='/dashboard/user-reports' className='dashboard-panel-link'>Prijave korisnika</Link>
            <Link to='/dashboard/users' className='dashboard-panel-link'>Nalozi</Link>
            <Link to='/dashboard/items' className='dashboard-panel-link'>Proizvodi</Link>
        </div>
        <Outlet/>
    </div>
  )
}
