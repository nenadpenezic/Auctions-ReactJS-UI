import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserReportCard } from './UserReportCard';

export const UserReports = () => {
    const [userReports, setUserReports] = useState([]);

    useEffect(()=>{
        fetch(`https://localhost:44301/api/Report/get-reports`, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
          })
          .then(res =>res.json())
          .then(res=>{
            setUserReports(res)
          })
          .catch(res => console.log(res));
    },[])

  return (
    <div>
        {userReports.length>0?userReports.map(report=>{return <UserReportCard report={report}/>}):null}
    </div>
  )
}
