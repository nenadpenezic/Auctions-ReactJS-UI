import React, { useState } from 'react'
import './ItemDetailsStyle.css'
import { Offers } from './Offers'

import { useParams } from 'react-router-dom';
import { ItemsInformations } from './ItemsInformations';

import { useEffect } from 'react';


export const ItemDetails = () => {

  const currentUserID = useParams('itemID');
  const [itemDetails,setItemDetails] = useState();

    useEffect(()=>{
        fetch(`https://localhost:44301/api/Item/item-details/${currentUserID.itemID}`, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
        })
        .then(res =>res.json())
        .then(res=>{
            setItemDetails(res)
            console.log(res)
        })
        .catch(res => console.log(res));
    },[])



  return (
    <div className='main-container'>
        {
          itemDetails?
          <>
            <ItemsInformations item={itemDetails}/>
            <Offers fetchedOffers={itemDetails}/>
          </>:null
        }

    </div>
  )
}
