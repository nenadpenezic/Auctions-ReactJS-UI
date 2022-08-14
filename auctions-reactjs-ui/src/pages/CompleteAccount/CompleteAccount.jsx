import React from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../components/Context/ContextProvider';

export const CompleteAccount = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [contactMail, setContactMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profileImage, setProfileImage] = useState();

  const {setUser} = useContext(Context);
  
  
  const navigate = useNavigate();
  console.log(profileImage)
  const completeAccountApi=(event)=>{
    event.preventDefault();

    const form = new FormData();
    form.append('Name',name);
    form.append('Lastname', lastName);
    form.append('EmailForContact', contactMail);
    form.append('PhoneNumber',parseInt(phoneNumber));
    form.append('ProfilePicture', profileImage)
    
    const token = localStorage.getItem('jwt');

    fetch('https://localhost:44301/api/User/complete-account', {
        method: 'POST',
        headers: {//'Content-Type':'application/json',
                  "Authorization" : `Bearer ${token}`},
        body: form
        //JSON.stringify({
          //Name:name,
          //Lastname:lastName,
          //EmailForContact: contactMail,
         // PhoneNumber: parseInt(phoneNumber)
       // })
    })
    .then((res)=>{return res.json()}).then(res=>{
      setUser(res);
      navigate('/')
    })
    .catch(res => console.log(res));
  }


  return (
    <CentralFormContainer>
      <form onSubmit={completeAccountApi}>
        <input type="text" name="Name" id="" placeholder="Name" className="input-field" onChange={(event)=>setName(event.target.value)}/>
        <input type="text" name="Lastname" id="" placeholder="Lastname" className="input-field" onChange={(event)=>setLastname(event.target.value)}/>
        <input type="email" name="contact-mail" id="" placeholder="Contact email" className="input-field" onChange={(event)=>setContactMail(event.target.value)}/>
        <input type="number" name="phone-number" id="" placeholder="Phone number" className="input-field" onChange={(event)=>setPhoneNumber(event.target.value)}/>
        <input type="date" name="date-of-birdh" id="" className="input-field"/>
        <input type="file" name="profile-picture" id="" onChange={(event)=>setProfileImage(event.target.files[0])}/>
        <button className="light-blue-bg-white-txt-btn">Register</button>
      </form>
    </CentralFormContainer>
  )
}
