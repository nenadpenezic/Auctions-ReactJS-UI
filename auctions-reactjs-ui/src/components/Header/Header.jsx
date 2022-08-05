import React from 'react'
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';



export const Header = () => {

  const {user} = useContext(Context);

  return (
    <header className='main-header'>
        <Link to="/" className="main-header__logo">Licitacije.rs</Link>
        {!user?
        <div>
            <Link to="/register" className="white-bg-light-blue-txt-btn main-header__log-in-btn">Register</Link>
            <Link to="login" className="white-bg-light-blue-txt-btn">Log in</Link>
        </div>
        : user && !user.isAccountComplete? 
          <Link to="/register" className="white-bg-light-blue-txt-btn main-header__log-in-btn">Log out</Link>
        :<div>

        </div>
        }
    </header>
  )
}
