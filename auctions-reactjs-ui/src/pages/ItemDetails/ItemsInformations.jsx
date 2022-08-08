import React from 'react'
import './ItemDetailsStyle.css'

export const ItemsInformations = ({item}) => {

  return (
        <div className='item-details-container'>
            <div className='item-details'>
                <div className='item-details__image-column'>
                    <img src={{}} alt="" className='item-details__image'/>
                </div>
                <div className='item-details__info-column'>
                    <h2 className='item-details__item-name'>{item.itemName}</h2>
                    <span className='item-details__item-price'>{item.price}</span>
                    <p className='item-details__item-description'>{item.description}</p>
                </div>
            </div>
            <div></div>
        </div>
  )
}