import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'

export const Register = () => {
  const [message, setMessage] = useState("");

  const register=(e)=>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmedPassword = document.getElementById('confirm-password').value;

    if(password !==confirmedPassword){
      setMessage('Morate uneti istu šifru!');
      return;
    }
    
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('confirmedPassword', confirmedPassword);

    fetch('https://localhost:44301/api/Account/add-account', {
        method: 'POST',
        body: form
    })
    .then(() => setMessage('Proverite email za podvrdu email adrese.'))
    .catch(() => setMessage('Došlo je do greške prilikom registracije, pokušajte ponovo.'));
  }

  return (
    <CentralFormContainer>
        <h1 className='form-title'>Registracija</h1>
        <form onSubmit={register} className='central-form '>
            <input type="email" name="email" id="email" placeholder="Email adresa" className="input-field" required/>
            <input type="password" name="password" id="password" placeholder="Šifra" className="input-field" required/>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="Ponovo unesite šifru" className="input-field" required/>
            <input type='submit' className="light-blue-bg-white-txt-btn central-form-submit-btn" value='Potvrdi registraciju'/>
        </form>
        <span className='message'>{message}</span>
    </CentralFormContainer>
  )
}
