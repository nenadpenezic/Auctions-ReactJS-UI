import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [returnedMessage,setReturnedMessage] = useState("");

  
  const register=()=>{
    console.log(email)
    fetch('https://localhost:44301/api/Account/add-account', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          Email:email,
          Password:password
        })
    }).then(res => console.log(res))
      .then(res => console.log(res));
  }

  return (
    <CentralFormContainer>
        <>
            <input type="email" name="email" id="" placeholder="Email" className="input-field" onChange={(event)=>setEmail(event.target.value)}/>
            <input type="password" name="password" id="" placeholder="Password" className="input-field" onChange={(event)=>setPassword(event.target.value)}/>
            <input type="password" name="password" id="" placeholder="Confirm password" className="input-field" onChange={(event)=>setConfirmPassword(event.target.value)}/>
            <button className="light-blue-bg-white-txt-btn" onClick={register}>Register</button>
        </>
    </CentralFormContainer>
  )
}
