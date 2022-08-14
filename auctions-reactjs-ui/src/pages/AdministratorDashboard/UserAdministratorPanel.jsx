import React from 'react'
import { useState } from 'react'

import profilePlaceHolder from '../../assets/user-placeholder.png'

export const UserAdministratorPanel = () => {

  const [users, setUsers] = useState([]);

  const updateUserBlockedProperty=(userID)=>{
    const updatedData = users.map((obj) => {
      if (obj.userID === userID) {
          return { ...obj, isBlocked: !obj.isBlocked };
      } else return obj;
  });
    setUsers(updatedData)
  }
  const search =(query)=>{
      if(query=="")
          return;

        fetch(`https://localhost:44301/api/User/administrator-users`, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(query)
        })
        .then(res =>res.json())
        .then(res=>{
          setUsers(res)
          console.log(res)
        })
        .catch(res => console.log(res));
  }

  return (
    <div>
      <div>
          <input type="text" placeholder='Search for user' onChange={(event)=>search(event.target.value)} className='search-field'/>
      </div>
      <div>
          {
            users? users.map(user=>{
                return <UserAdministratorCard user={user} updateUserBlockedProperty={updateUserBlockedProperty}/>
            }):null
          }
      </div>
    </div>
  )
}

export const UserAdministratorCard = ({user, updateUserBlockedProperty}) => {

  const [triggerInput, setTriggerInput] = useState("");
  const [notificationText, setNotificationText] = useState('');

  const blockAccount = () =>{
    fetch(`https://localhost:44301/api/Account/block-account/${user.userID}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(notificationText)
  })
  .then(res =>updateUserBlockedProperty(user.userID))
  .catch(res => console.log(res));
  }

  const unblockAccount = () =>{
    fetch(`https://localhost:44301/api/Account/unblock-account/${user.userID}`, {
      method: 'GET',
      headers: {'Content-Type':'application/json'},
  })
    .then(res =>updateUserBlockedProperty(user.userID))
    .catch(res => console.log(res));
  }
  const sendNotification = () =>{
    fetch(`https://localhost:44301/api/Notification/administrator/send-notification/${user.userID}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(notificationText)
  })
    .then(res =>{console.log('done')})
    .catch(res => console.log(res));
  }
  return (
    <div className='user-admin-card'>
        <div className='user-admin-card__details-container'>
          <div className='user-admin-card__details'>
              <img src={profilePlaceHolder} alt="" className='user-admin-card__profile-picture'/>
              <div className='user-admin-card__informations'>
                  <span className='user-admin-card__name'>{user.name} {user.lastname}</span>
                  <span className='user-admin-card__email'>{user.emailForContact}</span>
                  <span className='user-admin-card__phone-number'>{user.phoneNumber}</span>
              </div>
          </div>
          <div>
          {
            user.isBlocked?
            <button className='user-admin-card__btn user-admin-card__block-btn' onClick={unblockAccount}>Odblokiraj nalog</button>:
            <button className='user-admin-card__btn user-admin-card__block-btn' onClick={()=>setTriggerInput('block')}>Blokiraj nalog</button>
          }
          <button className='user-admin-card__btn user-admin-card__notification-btn' onClick={()=>setTriggerInput('notification')}>Posalji obavestenje</button>
          </div>

        </div>
        {
          triggerInput=='block'?
          <div className={`dashboard-card__block-form-container`}>
            <input type="text" placeholder='Razlog za blokiranje naloga' className='dashboard-card__block-input-field' onChange={(event)=>setNotificationText(event.target.value)}/>
            <button className='dashboard-card__block-confirm' onClick={blockAccount}>Potvrdi</button>
          </div>:  triggerInput=='notification'?
          <div className={`dashboard-card__block-form-container`}>
              <input type="text" placeholder='Unesi tekst obavestenja' className='dashboard-card__block-input-field' onChange={(event)=>setNotificationText(event.target.value)}/>
              <button className='dashboard-card__block-confirm' onClick={sendNotification}>Potvrdi</button>
          </div>:
          null
        }

    </div>
  )
}
