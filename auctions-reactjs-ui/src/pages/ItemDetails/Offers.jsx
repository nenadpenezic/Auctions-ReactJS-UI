import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'



import { Offer } from './Offer';


export const Offers = ({fetchedOffers, addOffersToItemDetails, updateOffersStateAfterSell, removeOfferFormItemDetails}) => {

    const [isAccepted,setIsAccepted] = useState(true);
    const [offerMoneyAmount, setOfferMoneyAmount] = useState(0);

    useEffect(()=>{

       const isAccpetedSelected = fetchedOffers.offers.find(obj => {
        return obj.isAccepted === true
      });
      setIsAccepted(isAccpetedSelected !== undefined?true:false);
      console.log()
    },[fetchedOffers])


    const addOffer=()=>{
      const token = localStorage.getItem('jwt');
      console.log(offerMoneyAmount)
      fetch(`https://localhost:44301/api/Offer/add-offer/${fetchedOffers.itemID}`, {
          method: 'POST',
          mode: 'cors',
          headers: {'Content-Type':'application/json',
                      "Authorization" : `Bearer ${token}`},
          body:JSON.stringify({value:parseInt(offerMoneyAmount)})
      })
      .then(res=>res.json())
      .then(res=>{addOffersToItemDetails(res)})//setOffers([res,...offers]))
      .catch(res => console.log(res));
    }


  return (
    <div className='offers-container'>
      {!isAccepted?
       <div className='add-offer'>
            <input type="number" onChange={(event)=>setOfferMoneyAmount(event.target.value)} className='add-offer__input' placeholder='Enter offer'/>
            <button onClick={addOffer} className='add-offer__button'>Add offer</button>
        </div>:
        <h2>SOLD</h2>
    }
       
        <div>
            {
              fetchedOffers.offers.map((offer,index)=>{
                return <Offer 
                offer={offer} 
                ownerID={fetchedOffers.ownerID} 
                index={index} 
                updateOffersStateAfterSell={updateOffersStateAfterSell}
                removeOfferFormItemDetails={removeOfferFormItemDetails}
                />
              })
            }
        </div>
    </div>
  )
}
