import React from 'react'
import { useState,useEffect } from 'react';
import { Item } from '../../components/Item/Item';
export const ItemsPanel = ({userID}) => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch(`https://localhost:44301/api/Item/get-user-items/${userID}`, {
          method: 'GET',
          headers: {'Content-Type':'application/json'},
        })
        .then(res =>res.json())
        .then(res=>{
            setItems(res)
            console.log(res)
        })
        .catch(res => console.log(res));
      },[])

    return(
        <div className='user-items'>
        {items.length>0? items.map(item=>{
            return <Item item={item}/>
          })
          :null
        }
        </div>
      )
}
