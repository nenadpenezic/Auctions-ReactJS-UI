import React from 'react'
import { ProfileDetails } from './ProfileDetails';


import './ProfileStyle.css'

import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPager } from '@fortawesome/free-solid-svg-icons'

import { ItemsPanel } from './ItemsPanel'
import { ReviewsPanel } from './ReviewsPanel'

import { useState } from 'react'



export const Profile = () => {
  
    const [currentDisplayPanel, setCurrentDisplayPanel] = useState("items");
    const currentUserID = useParams('userID');

  return (
    <>
        
        <div className='profile-container'>
          <ProfileDetails userID={currentUserID.userID}/>
          <div className='profile-body'>
            <div className='body-content-menu'>
              <button className='body-content-menu__button' onClick={()=>{setCurrentDisplayPanel('items')}}><FontAwesomeIcon icon={faPager}/></button>
              <button className='body-content-menu__button' onClick={()=>{setCurrentDisplayPanel('notifications')}}><FontAwesomeIcon icon={faUser}/></button>
            </div>
            {currentDisplayPanel == 'items'?
              <ItemsPanel userID={currentUserID.userID}/>:
              <ReviewsPanel userID={currentUserID.userID}/>
            }
          </div>
        </div>
    </>
  )
}
