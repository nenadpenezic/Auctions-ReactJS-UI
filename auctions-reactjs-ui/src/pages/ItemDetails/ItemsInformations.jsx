import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './ItemDetailsStyle.css'

export const ItemsInformations = ({item}) => {
    const [mainImage, setMainImage] = useState('');
    
    useEffect(()=>{
        setMainImage(item.itemPhotos[0])
    },[])

  return (
        <div className='item-details-container'>
            <div className='item-details'>
                <div className='item-details__image-column'>
                    <img src={`https://localhost:44301/Images/${mainImage?mainImage:null}`} alt="" className='item-details__image'/>
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
            <div className='item-details__item-photos'>
                {
                    item.itemPhotos.map(photo=>{
                        return <img src={`https://localhost:44301/Images/${photo}`} alt='item-photo-preview' className='item-details__item-photo' onClick={()=>setMainImage(photo)}/>
                    })
                }
            </div>
        </div>
  )
}