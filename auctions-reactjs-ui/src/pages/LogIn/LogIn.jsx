import React from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer';
import { useState } from 'react'
import { Context } from '../../components/Context/ContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}=useContext(Context);

  const [returnedMessage,setReturnedMessage] = useState("");
  const history = useNavigate();

  const login=()=>{

    fetch('https://localhost:44301/api/Account/log-in', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          Email:email,
          Password:password
        })
    })
    .then(res =>res.json())
    .then(res=>{
      
      console.log(res.userObj);
      localStorage.setItem('jwt',res.token);
     
  
      if(!res.userObj){
        history(`/complete`);
      }
      else{
        setUser(res.userObj);
        history(`/`);
      }
        
    })
    .catch(res => console.log(res));

  }

  return (
    <CentralFormContainer>
        <>
            <input type="email" name="email" id="" placeholder="Email" className="input-field" onChange={(event)=>setEmail(event.target.value)}/>
            <input type="password" name="password" id="" placeholder="Password" className="input-field" onChange={(event)=>setPassword(event.target.value)}/>
            <button className="light-blue-bg-white-txt-btn" onClick={login}>Log in</button>
        </>
    </CentralFormContainer>
  )
}
