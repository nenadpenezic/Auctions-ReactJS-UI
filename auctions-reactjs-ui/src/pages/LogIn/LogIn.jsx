import React from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer';
import { useState } from 'react'
import { Context } from '../../components/Context/ContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
  const [message, setMessage] = useState("");

  const {setUser}=useContext(Context);

  const history = useNavigate();

  const login=(e)=>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const form = new FormData();
    form.append('email', email);
    form.append('password', password);

    fetch('https://localhost:44301/api/Account/log-in', {
        method: 'POST',
        body: form
    })
    .then(res =>res.json())
    .then(res=>{
        localStorage.setItem('jwt',res.token);
      if(!res.userObj)
        history(`/complete`);
      else{
        setUser(res.userObj);
        if(res.userObj.role=='User')
          history(`/`);
        else history(`/dashboard`);
      }
    })
    .catch(() => setMessage('Prijava nije uspela proverite šifru i email adresu!'));
  }

  return (
    <CentralFormContainer>
       <h1 className='form-title'>Prijava</h1>
        <form className='central-form' onSubmit={login}>
            <input type="email" name="email" id="email" placeholder="Email" className="input-field" required/>
            <input type="password" name="password" id="password" placeholder="Password" className="input-field" required/>
            <input type='submit' className="light-blue-bg-white-txt-btn central-form-submit-btn" value='Prijava'/>
        </form>
        <span className='message'>{message}</span>
    </CentralFormContainer>
  )
}
