import React from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CompleteAccount = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [contactMail, setContactMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  
  
  const navigate = useNavigate();

  const completeAccountApi=()=>{
    const token = localStorage.getItem('jwt');
    fetch('https://localhost:44301/api/User/complete-account', {
        method: 'POST',
        headers: {'Content-Type':'application/json',
                  "Authorization" : `Bearer ${token}`},
        body: JSON.stringify({
          Name:name,
          Lastname:lastName,
          emailForContact: contactMail,
          PhoneNumber: phoneNumber
        })
    })
    .then(()=>{
      navigate('/');
    })
    .catch(res => console.log(res));
  }


  return (
    <CentralFormContainer>
        <input type="text" name="Name" id="" placeholder="Name" className="input-field" onChange={(event)=>setName(event.target.value)}/>
        <input type="text" name="Lastname" id="" placeholder="Lastname" className="input-field" onChange={(event)=>setLastname(event.target.value)}/>
        <input type="email" name="contact-mail" id="" placeholder="Contact email" className="input-field" onChange={(event)=>setContactMail(event.target.value)}/>
        <input type="number" name="phone-number" id="" placeholder="Phone number" className="input-field" onChange={(event)=>setPhoneNumber(event.target.value)}/>
        <input type="date" name="date-of-birdh" id="" className="input-field"/>
        <button className="light-blue-bg-white-txt-btn" onClick={completeAccountApi}>Register</button>
    </CentralFormContainer>
  )
}
