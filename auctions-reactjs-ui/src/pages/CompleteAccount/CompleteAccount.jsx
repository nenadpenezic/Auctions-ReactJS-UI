import React from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../components/Context/ContextProvider';

export const CompleteAccount = () => {

  const {setUser} = useContext(Context);
  
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const completeAccount=(event)=>{

    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const contactMail = document.getElementById('contact-email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const profileImage = document.getElementById('profile-picture').files[0];
    const dateOfBirth = document.getElementById('date-of-birth').value;
    
    const form = new FormData();
    form.append('name',name);
    form.append('lastname', lastname);
    form.append('emailForContact', contactMail);
    form.append('PhoneNumber',phoneNumber);
    form.append('ProfilePicture', profileImage);
    form.append('DateOfBirth', dateOfBirth);

    const token = localStorage.getItem('jwt');

    fetch('https://localhost:44301/api/User/complete-account', {
        method: 'POST',
        headers: {"Authorization" : `Bearer ${token}`},
        body: form
    })
    .then(res=>res.json())
    .then(res=>{
      setUser(res);
      navigate('/')
    })
    .catch(res => setMessage('Došlo je do greške, proverite unete informacije!'));
  }


  return (
    <CentralFormContainer>
      <h1 className='form-title'>Lične informacije</h1>
      <form onSubmit={completeAccount}>
        <input type="text" name="Name" id="name" placeholder="Ime" className="input-field" required/>
        <input type="text" name="Lastname" id="lastname" placeholder="Prezime" className="input-field"/>
        <input type="email" name="contact-mail" id="contact-email" placeholder="Email za kontakt" className="input-field" required/>
        <input type="text" name="phone-number" id="phone-number" placeholder="Broj telefona" className="input-field" required/>
        <label htmlFor="date-of-birth">Datum rođenja</label>
        <input type="date" name="date-of-birth" id="date-of-birth" className="input-field" required placeholder=''/>
        <label htmlFor="profile-picture">Profilna slika</label>
        <input type="file" name="profile-picture" id="profile-picture" required className="input-field"/>
        <input type='submit' className="light-blue-bg-white-txt-btn central-form-submit-btn" value='Završite registraciju'/>
      </form>
      <span className='message'>{message}</span>
    </CentralFormContainer>
  )
}
