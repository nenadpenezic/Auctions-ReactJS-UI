import React from 'react'
import { useSearchParams } from "react-router-dom";
export const SearchSideMenu = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  const search = (event) =>{
    event.preventDefault();

    const itemName = document.getElementById('product-name');
    const startingPrice = document.getElementById('starting-price');
    const endingPrice = document.getElementById('ending-price');
    const isSold = document.getElementById('is-sold');
    setSearchParams({
      itemName:itemName.value,
      startPrice:startingPrice.value,
      endPrice:endingPrice.value,
      isSold:isSold.checked?true:false
    });
  }

  return (
    <div className='search-side-menu'>
        <h2 className='search-side-menu__title'>Pretraga</h2>
        <form className='search-side-menu__form' onSubmit={search}>
            <input type="text" name="product-name" id="product-name" placeholder='Naziv proizvoda' className='search-side-menu__form-input'/>
            <input type="number" name="starting-price" id="starting-price" placeholder='Pocetna cena' className='search-side-menu__form-input'/>
            <input type="number" name="ending-price" id="ending-price" placeholder='Konacna cena' className='search-side-menu__form-input'/>
            <select name="category" id="category" className='search-side-menu__form-input'>

            </select>
            <label htmlFor="is-sold" className='search-side-menu__is-sold-lable'>Ukljuci i prodate proizvode u pretragu</label>
            <input type="radio" name="is-sold" id="is-sold"/>

            <input type="submit" value="Pretraga" className='search-side-menu__submit light-blue-bg-white-txt-btn' />
        </form>
    </div>
  )
}
