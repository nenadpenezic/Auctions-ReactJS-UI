import React from 'react'
import { useState } from 'react';

export const ReportPanel = ({userID}) => {
    const [reportTitle, setReportTitle] = useState('');
    const [reportExplanation, setReportExplanation] = useState('');

    const sendReport = (e) =>{
        e.preventDefault();
        //const form = new FormData();
        //form.append('reportTitle', reportTitle);
        //form.append('report', reportExplanation);

        const token = localStorage.getItem('jwt');
        fetch(`https://localhost:44301/api/Report/report-user/${userID}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({
                reportTitle:reportTitle,
                report:reportExplanation
            })
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(res => console.log(res));

    }

  return (
    <div className='report-panel'>
        <h2 className='report-panel__title'>Prijavi korisnika</h2>
        <form className='report-panel__form'>
            <input type="text" placeholder='Razlog za prijavu' className='report-panel__input-title' onChange={(event)=>setReportTitle(event.target.value)}/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Detaljnije objasnjenje' className='report-panel__textarea' onChange={(event)=>setReportExplanation(event.target.value)}></textarea>
            <button onClick={sendReport}>Submit report</button>
        </form>
    </div>

  )
}
