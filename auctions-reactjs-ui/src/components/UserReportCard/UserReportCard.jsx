import React from 'react'

export const UserReportCard = ({report}) => {
  return (
    <div>
        <div>
            
        </div>
        <div>
            <span>  {report.reporterName} {report.reporterLastname} reported {report.reportAgainstName} {report.reportAgainstLastname} {report.dateTime}</span>
            <h3>{report.reportTitle}</h3>
            <p>{report.reportDetails}</p>
        </div>
    </div>
  )
}
