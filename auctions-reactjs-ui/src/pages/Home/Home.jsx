import React, { useState } from 'react'
import { SearchSideMenu } from './SearchSideMenu'
import './HomeStyle.css'
import { ItemList } from './ItemList'
import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
export const Home = () => {

  const [itemList, setItemList] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

    let itemName = searchParams.get('itemName') ? searchParams.get('itemName') : '';
    let startPrice = searchParams.get('startPrice') ? searchParams.get('startPrice') : 0;
    let endingPrice = searchParams.get('endPrice') ? searchParams.get('endPrice') : 0;
    let isSold = searchParams.get('isSold') ? searchParams.get('isSold') : false;


  useEffect(()=>{
    fetch(`https://localhost:44301/api/Item/get-items?ItemName=${itemName}&StartPrice=${parseInt(startPrice)}&endPrice=${parseInt(endingPrice)}&IsSold=${isSold}`, {
      method: 'GET',
        headers: {'Content-Type':'application/json'},
    })
    .then(res =>res.json())
    .then(res=>{
      setItemList(res)
    })
    .catch(res => console.log(res));
    },[itemName, startPrice, endingPrice, isSold])

  return (
    <div className='home'>
        <SearchSideMenu/>
        {
          itemList.length>0?<ItemList itemsList={itemList}/>:null
        }
        
    </div>
  )
}
