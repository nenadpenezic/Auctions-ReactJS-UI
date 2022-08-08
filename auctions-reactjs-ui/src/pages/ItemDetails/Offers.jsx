import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



import { Offer } from './Offer';


export const Offers = ({fetchedOffers}) => {

    const [offers,setOffers] = useState([]);
    const [offerMoneyAmount, setOfferMoneyAmount] = useState(0);

    useEffect(()=>{
        setOffers(fetchedOffers.offers);
    },[fetchedOffers])
    

    const sellItem =(offerID)=>{
      const token = localStorage.getItem('jwt');
      fetch('https://localhost:44301/api/Item/add-item', {
          method: 'POST',
          mode: 'cors',
          headers: {'Content-Type':'application/json',
                      "Authorization" : `Bearer ${token}`},
          body:{}
      })
      .then(()=>{})
      .catch(res => console.log(res));
    }

    const addOffer=()=>{
      const token = localStorage.getItem('jwt');
      console.log(offerMoneyAmount)
      fetch(`https://localhost:44301/api/Offer/add-offer/${fetchedOffers.itemID}`, {
          method: 'POST',
          mode: 'cors',
          headers: {'Content-Type':'application/json',
                      "Authorization" : `Bearer ${token}`},
          body:JSON.stringify(parseInt(offerMoneyAmount))
      })
      .then(()=>{})
      .catch(res => console.log(res));
    }

  return (
    <div className='offers-container'>
        <div>
            <input type="number" onChange={(event)=>setOfferMoneyAmount(event.target.value)}/>
            <button onClick={addOffer}>Add offer</button>
        </div>
        <div>
            {
              offers.map((offer,index)=>{
                return <Offer offer={offer} ownerID={fetchedOffers.ownerID} index={index}/>
              })
            }
        </div>
    </div>
  )
}
