import React from 'react'
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';

import userImage from '../../assets/user.png'


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
        :<div className='main-header__user-panel'>
            <Link to={"/profile/"+user.userID} className='main-header__current-user'>
                <img src={userImage} alt=""/>
                <span className='main-header__user-name'>{user.name} {user.lastname}</span>
            </Link>
        
            <Link to="/add-item" className="white-bg-light-blue-txt-btn main-header__log-in-btn">Add</Link>
            <Link to="/register" className="white-bg-light-blue-txt-btn main-header__log-in-btn">Log out</Link>
          </div>
        }
    </header>
  )
}
