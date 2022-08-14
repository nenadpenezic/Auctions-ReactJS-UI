import React from 'react'
import profilePlaceHolder from '../../assets/user-placeholder.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';
import { useEffect } from 'react';

export const ProfileDetails=({userID})=>{

    const [userProfile,setUserProfile] = useState();

    useEffect(()=>{
        
        fetch(`https://localhost:44301/api/User/user-profile/${userID}`, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        })
        .then((res)=>res.json())
        .then(res=>setUserProfile(res))
        .catch(res => console.log(res));
    },[])


    const formatDate = (dateAndTime)=>{
        const date = dateAndTime.split("T")[0];
        const dateParts = date.split('-');

        return dateParts[2]+'.'+dateParts[1]+'.'+dateParts[0];
    }

    return (
        <>
        {userProfile?
        <div className='profile-details-container'>
            <div className='profile-details'>
                <img src={userProfile.profilePhoto?`https://localhost:44301/Images/${userProfile.profilePhoto} `:profilePlaceHolder} alt="" className='profile-details__profile-image'/>
                <ul className='profile-details__user-info'>
                    <li className='profile-details__user-info-li profile-details__profile-name'>{userProfile.name} {userProfile.lastname}</li>
                    <li className='profile-details__user-info-li'> <FontAwesomeIcon icon={faLocationPin} /> City, Country</li>
                    <li className='profile-details__user-info-li'> <FontAwesomeIcon icon={faMailBulk} /> {userProfile.emailForContact}</li>
                    <li className='profile-details__user-info-li'> <FontAwesomeIcon icon={faPhone} /> {userProfile.phoneNumber}</li>
                    <li className='profile-details__user-info-li'><span>Join Date: </span> {formatDate(userProfile.joinDate)}</li>
                    <li className='profile-details__user-info-li'><span>Last time online: </span> {formatDate(userProfile.lastTimeOnline)}</li>
                </ul>
            </div>

            <div className='profile-details__summarized'>
                <div className='profile-details__summarized-block'>
                    <span className='profile-details__summarized-block-value'>{userProfile.numberOfItemsOnSale}</span>
                    <span className='profile-details__summarized-block-name'>Selling items</span>
                </div>

                <div className='profile-details__summarized-block'>
                    <span className='profile-details__summarized-block-value'>{userProfile.numberOfReviews}</span>
                    <span className='profile-details__summarized-block-name'>Reviews</span>
                </div>

                <div className='profile-details__summarized-block'>
                    <span className='profile-details__summarized-block-value'>20</span>
                    <span className='profile-details__summarized-block-name'>Average grade</span>
                </div>
            </div>
    </div>:null
}
    </>
    
    )
 }