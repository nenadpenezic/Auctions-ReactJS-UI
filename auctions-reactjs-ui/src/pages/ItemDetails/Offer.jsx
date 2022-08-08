import React from 'react'
import { useContext } from 'react'

import profilePlaceHolder from '../../assets/user-placeholder.png';
import { Context } from '../../components/Context/ContextProvider';

export const Offer = ({offer, ownerID, index}) => {
    const {user} = useContext (Context);

        const ActionButton=()=>{
        if(!user)
            return null; 

        if( user.userID !== ownerID)
            return null; 

        if(offer.isAccepted)
            return ( <button className='offer__btn offer__btn--reject'>Reject offer</button> )
        if(!offer.isAccepted)
            return ( <button className='offer__btn offer__btn--accept'>Accept offer</button> )
    }
  return (
    <div className='offer'>
    <div className='offer__buyer'>
      <img src={profilePlaceHolder} alt="" className='offer__buyer-image'/>
      <div>
        <span className='offer__buyer-name'>{offer.name} {offer.lastname}</span>
        <span className='offer__offer-placed-date'>Date</span>
      </div>
    </div>
    <div className='offer__ammount-container'>
      <span className='offer__ammount'>{offer.value}</span>
      {index === 0 ? <ActionButton/> : null}
      
      
    </div>
    
  </div>
  )
}
