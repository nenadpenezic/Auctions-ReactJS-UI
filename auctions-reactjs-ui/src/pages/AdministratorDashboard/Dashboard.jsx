import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div>
            <Link to='/dashboard/user-reports'>User reports</Link>
            <Link to='/dashboard/users'>Users</Link>
            <Link to='/dashboard/items'>Items</Link>
        </div>
        <Outlet/>
    </div>
  )
}
