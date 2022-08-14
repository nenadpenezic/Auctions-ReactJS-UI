import React from 'react'
import {Item} from '../../components/Item/Item'
export const ItemList = ({itemsList}) => {
  return (
    <div className='items-list'>
        {
            itemsList.map(item=>{
                return <Item item={item}/>
            })
        }
    </div>
  )
}
