import React from 'react'
import profilePlaceHolder from '../../assets/user-placeholder.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faMailBulk, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'


import './ProfileStyle.css'

export const Profile = () => {
  return (
    <div className='profile-container'>
        <div>
            <div className='profile-details'>
                <img src={profilePlaceHolder} alt="" className='profile-details__profile-image'/>
                <ul className='profile-details__user-info'>
                    <li className='profile-details__user-info-li profile-details__profile-name'>Name Lastname</li>
                    <li className='profile-details__user-info-li'> <FontAwesomeIcon icon={faLocationPin} /> City, Country</li>
                    <li className='profile-details__user-info-li'> <FontAwesomeIcon icon={faMailBulk} /> jdone@gmail.com</li>
                    <li className='profile-details__user-info-li'> <FontAwesomeIcon icon={faPhone} /> 064 12345678</li>
                    <li className='profile-details__user-info-li'><span>Join Date: </span> 01. 01. 2010</li>
                    <li className='profile-details__user-info-li'><span>Last time online: </span> 01. 01. 2010</li>
                </ul>
            </div>

            <div className='profile-details__summarized'>
                <div className='profile-details__summarized-block'>
                    <span className='profile-details__summarized-block-value'>20</span>
                    <span className='profile-details__summarized-block-name'>Selling items</span>
                </div>

                <div className='profile-details__summarized-block'>
                    <span className='profile-details__summarized-block-value'>20</span>
                    <span className='profile-details__summarized-block-name'>Reviews</span>
                </div>

                <div className='profile-details__summarized-block'>
                    <span className='profile-details__summarized-block-value'>20</span>
                    <span className='profile-details__summarized-block-name'>Average grade</span>
                </div>
            </div>

            <p className='profile-details__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est!</p>

        </div>
    </div>
  )
}
