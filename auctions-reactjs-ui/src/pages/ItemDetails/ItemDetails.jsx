import React from 'react'
import './ItemDetailsStyle.css'
export const ItemDetails = () => {
  return (
    <div className='main-container'>
        <div className='item-details-container'>
            <div className='item-details'>
                <div className='item-details__image-column'>
                    <img src={{}} alt="" className='item-details__image'/>
                </div>
                <div className='item-details__info-column'>

                    <h2 className='item-details__item-name'>Item name</h2>
                    <span className='item-details__item-price'>Item price</span>
                    <p className='item-details__item-description'>Item description</p>
                </div>
            </div>
            <div></div>
        </div>
        <div className='offers-container'></div>
    </div>
  )
}
