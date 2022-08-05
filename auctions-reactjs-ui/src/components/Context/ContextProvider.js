import React, { useState } from 'react'

//const initialState = {
    //user:{},
    //error:''
  //};

//const reducer = (state, action) => {
   // switch (action.type) {
      //  case 'login':

    //}
//}

export const Context = React.createContext();

export const ContextProvider = ({children}) => {

    const [user, setUser]= useState();

  return (
    <Context.Provider value={{user,setUser}}>
        {children}
    </Context.Provider>
  )
}
