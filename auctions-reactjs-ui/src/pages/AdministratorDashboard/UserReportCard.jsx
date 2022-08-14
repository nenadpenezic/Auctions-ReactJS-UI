import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


export const UserReportCard = ({report}) => {

  const [isContentOpen, setIsContentOpen] = useState(false);
  const [notificationText, setNotificationText] = useState('');

  const sendNotification = () => {
    fetch(`https://localhost:44301/api/Notification/administrator/send-notification/${report.reporterID}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(notificationText)
    })
    .then(res =>res.json())
    .then(res=>console.log(res))
    .catch(res => console.log(res));
  }
  
  return (
    <div className='user-report-card'>
        <div className='user-report-card__header' onClick={()=>setIsContentOpen(!isContentOpen)}>
            <h1 className='user-report-card__header-title'>{report.reportTitle}</h1>
            <FontAwesomeIcon icon={faArrowDown} className='user-report-card__arrow-down'/>
        </div>
        {
          isContentOpen?
          <div className='user-report-card__content'>
            <span className='user-report-card__content-header'>  {report.reporterName} {report.reporterLastname} reported {report.reportAgainstName} {report.reportAgainsLastname} {report.reportDate}</span>
            <h3 className='user-report-card__content-title'>{report.reportTitle}</h3>
            <p className='user-report-card__content-details'>{report.reportDetails}</p>

            <div className='user-report-card__notifications'>
              <span className='user-report-card__notifications-title'>Obavestite podnosioca prijave o daljim akcijama</span>
              <form className='user-report-card__notification-form' onSubmit={sendNotification}>
                <textarea name="notificationText" id="" cols="30" rows="1" className='user-report-card__notification-input-filed' placeholder='Unesite tekst obavestenja' onChange={(event) => setNotificationText(event.target.value)}></textarea>
                <button className='user-report-card__notification-button' type='submit'>Posalji obavestenje</button>
              </form>

            </div>
          </div> : null
        }
 
    </div>
  )
}
