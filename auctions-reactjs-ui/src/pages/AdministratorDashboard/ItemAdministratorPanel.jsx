import React from 'react'
import { useState } from 'react'
import './AdministratorDashboard.css'
export const ItemAdministratorPanel = () => {

  const [items, setItems] = useState([]);


  const search =(query)=>{
      if(query=="")
          return;
          
        fetch(`https://localhost:44301/api/Item/administrator/get-items/${query}`, {
          method: 'GET',
          headers: {'Content-Type':'application/json'},
        })
        .then(res =>res.json())
        .then(res=>{
          setItems(res)
          console.log(res)
        })
        .catch(res => console.log(res));
  }
  
  return (
    <div >
      <div>
          <input type="text" onChange={(event)=>search(event.target.value)} className='search-field' placeholder='Pronadjite proizvode'/>
      </div>
      <div>
        {
          items?items.map(item=>{
            return <ItemAdministratorCard item={item} />
          }):null
        }
      </div>
    </div>
  )
}


const ItemAdministratorCard = ({item}) =>{
  const [triggerInput, setTriggerInput] = useState("");
  const [notificationText, setNotificationText] = useState('');
  ///api/Item/delete-item/{itemID}
  const deleteItem =()=>{
    fetch(`https://localhost:44301/api/Item/delete-item/${item.itemID}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(notificationText)
    })
    .then(res =>console.log('done'))
    .catch(res => console.log(res));
  }

  const blockItem = () =>{
    fetch(`https://localhost:44301/api/Item/block-item/${item.itemID}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(notificationText)
    })
    .then(res =>console.log('done'))
    .catch(res => console.log(res));
  }
  
  const unblockItem = () =>{
    fetch(`https://localhost:44301/api/Item/unblock-item/${item.itemID}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(notificationText)
    })
    .then(res =>console.log('done'))
    .catch(res => console.log(res));
  }
  return (
    <div className='administrator-item-card__container'>
      <div className='administrator-item-card'>
        <div >
            <div className='administrator-item-card__item-details'>
              <h1 className='item-administration-card__name'>{item.itemName}</h1>
              <span className='item-administration-card__price'>{item.price}</span>
              {
                item.isSold?  
                <span className='item-administration-card__is-sold item-administration-card__sold--sold'>Prodato</span> : 
                <span className='item-administration-card__sold item-administration-card__sold--avalible'>Dostupno</span>
              }
            </div>
            <div className='administrator-item-card__owner-details'>
              <span className='administrator-item-card__owner'>{item.name} {item.lastname}</span>
              <span className='administrator-item-card__added-date'>{item.addedDate}</span>
            </div>
          </div>
          <div className='administrator-item-card__btn-group'>
              <button className='administrator-item-card__remove-btn' onClick={()=>setTriggerInput("delete")}>Obrisi</button>
              {
                !item.isItemBlocked?
                <button className='administrator-item-card__block-btn' onClick={()=>setTriggerInput("block")}>Blokiraj dalju prodaju</button>:
                <button className='administrator-item-card__block-btn' onClick={unblockItem}>Vrati na prodaju</button>
              }
              
          </div>
        
        </div>
        {
          triggerInput=='block'?
          <div className={`dashboard-card__block-form-container`}>
            <input type="text" placeholder='Razlog za blokiranje proizvoda' className='dashboard-card__block-input-field' onClick={(event)=>setNotificationText(event.target.value)}/>
            <button className='dashboard-card__block-confirm' onClick={blockItem}>Potvrdi</button>
          </div>: 
          triggerInput == 'delete'?
          <div className={`dashboard-card__block-form-container`}>
            <input type="text" placeholder='Razlog za brisanje proizvoda' className='dashboard-card__block-input-field' onClick={(event)=>setNotificationText(event.target.value)}/>
            <button className='dashboard-card__block-confirm' onClick={deleteItem}>Potvrdi</button>
          </div>:
          null

        }

    </div>
  )
}
