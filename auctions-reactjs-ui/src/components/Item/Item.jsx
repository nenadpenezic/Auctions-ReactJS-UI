import React from 'react'
import './ItemStyle.css'
import itemPlaceholder from '../../assets/item-placeholder.png'
import { Link } from 'react-router-dom'
export const Item = ({item}) => {
  return (
    <div className='item-card'>
        <Link to="">
            <img src={itemPlaceholder} alt="" className='item-card__item-image'/>
            <div className="item-card__info-container">
                <h3 className='item-card__item-name'>{item.itemName}</h3>
                <span className='item-card__item-price'>500</span>
            </div>
        </Link>
    </div>
  )
}
