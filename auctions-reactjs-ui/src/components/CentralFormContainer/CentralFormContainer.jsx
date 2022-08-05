import React from 'react'
import './CentralFormContainer.css'

export const CentralFormContainer = (props) => {
  return (
    <main className='page-container'>
        <div className="form-container">
            <div className="central-form">
                {props.children}
            </div>
        </div>
    </main>
  )
}
