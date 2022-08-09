import React from 'react'
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';

import userImage from '../../assets/user.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

  const {user} = useContext(Context);

  const [isUserMenuOpen,setIsUserMenuOpen] = useState(false);
  console.log(user)
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
            <Link to={"/profile/"+user.userID}>
              <div className='main-header__current-user'>
                <img src={userImage} alt=""/>
                <span className='main-header__user-name'>{user.name} {user.lastname}</span>

                <ul className='main-header__current-user-dropdown-menu'>
                  <Link to="/add-item" className="main-header__dropdown-menu-option">Add</Link>
                  <Link to="/register" className="main-header__dropdown-menu-option">Log out</Link>
                </ul>
              </div>
            </Link>
              <div className='main-header__notification-container'>
                  <button className='main-header__notification-btn' onClick={()=>setIsUserMenuOpen(!isUserMenuOpen)}><FontAwesomeIcon icon={faBell}/></button>
                  <ul className={`main-header__notification-list ${isUserMenuOpen? 'main-header__notification-list--open': 'main-header__notification-list--closed' }`}>
                    {
                      user.notifications && user.notifications.length>0?
                      user.notifications.map(notification=>{
                        return <li className='main-header__notification'>{notification.notificationText}</li>
                      }):null
                    }
                  </ul>
              </div>

          </div>
        }
    </header>
  )
}
