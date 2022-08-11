import React from 'react'
import { useState } from 'react'


export const UserAdministratorPanel = () => {

  const [users, setUsers] = useState([]);

  const search =(query)=>{
      if(query=="")
          return;

        fetch(`https://localhost:44301/api/User/administrator-users`, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(query)
        })
        .then(res =>res.json())
        .then(res=>{
          setUsers(res)
          console.log(res)
        })
        .catch(res => console.log(res));
  }

  return (
    <div>
      <div>
          <input type="text" placeholder='Search for user' onChange={(event)=>search(event.target.value)}/>
      </div>
      <div>
          {
            users? users.map(user=>{
                return <UserAdministratorCard user={user}/>
            }):null
          }
      </div>
    </div>
  )
}

export const UserAdministratorCard = ({user}) => {
  return (
    <div>

        <div>
            <img src={{}} alt="" />
            <div>
                <span>{user.name} {user.lastname}</span>
                <span>{user.emailForContact}</span>
                <span>{user.phoneNumber}</span>
            </div>

            <button></button>

        </div>
    </div>
  )
}
