import React from 'react'
import './ItemStyle.css'
import itemPlaceholder from '../../assets/item-placeholder.png'
import { Link } from 'react-router-dom'
export const Item = ({item}) => {
  return (
    <div className='item-card'>
        <Link to={`/item/${item.itemID}`}>
            <img src={item.previewImage?`https://localhost:44301/Images/${item.previewImage}`:itemPlaceholder} alt="" className='item-card__item-image'/>
            <div className="item-card__info-container">
                <span className="item-card__category">{item.category}</span>
                <h3 className='item-card__item-name'>{item.itemName}</h3>
                <Link to={`/profile/${item.userID}`} className='item-card__owner'>
                  {item.name} {item.lastname}
                </Link>
                <div>
                    <span className='item-card__item-price'>{item.price}</span>
                    {item.isSold? 
                    <span className='item-card__item-avalibe --sold'>Prodato</span>:
                    <span className='item-card__item-avalibe --avalible'>Dostupno</span>}
                    
                </div>
                
            </div>
        </Link>
    </div>
  )
}
