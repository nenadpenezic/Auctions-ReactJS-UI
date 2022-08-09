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

                    <ul className='item-details__item-specifications'>
                        {
                            item.itemSpecifications.map(specification=>{
                                return <li className='item-details__item-specification'><span className='item-details__item-specifications-name'>{specification.specificationName}: </span> <span className='item-details__item-specification-value'> {specification.specificationValue}</span> </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
  )
}