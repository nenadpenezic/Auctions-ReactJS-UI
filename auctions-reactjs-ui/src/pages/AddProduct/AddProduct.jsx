import React from 'react'
import { useState } from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'
import { useNavigate } from 'react-router-dom';
import './AddProductStyle.css'
export const AddProduct = () => {

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const addSpecification=()=>{
        const specContainer = document.createElement('div');
        specContainer.className = 'item-specs__spec';

        const specName = document.createElement('input');

        specName.className = 'input-field spec-name';
        specName.placeholder = 'Specification name';
        specName.type = 'text';

        const specValue = document.createElement('input');

        specValue.className = 'input-field spec-value';
        specValue.placeholder = 'Specification value';
        specValue.type = 'text';

        specContainer.appendChild(specName);
        specContainer.appendChild(specValue);
        document.getElementsByClassName('item-specs')[0].append(specContainer);
    }

    const getSpecs = () =>{
        const specs = document.getElementsByClassName('item-specs__spec');

        const specsValues =[];

        for (let i =0; i<specs.length;i++){
            const specName = specs[i].firstChild;
            const specValue = specs[i].lastChild;
            
            specsValues[i]={
                SpecificationName:specName.value,
                SpecificationValue:specValue.value
            }
        }
        return specsValues;
    }

const getPicture=()=>{
    const itemPhoto = document.getElementById('item-photo').files;
    console.log(JSON.stringify(itemPhoto))
    return itemPhoto;
}

const addItem=(e)=>{
    e.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const description = document.getElementById('description').value; //pocetna-cena
    const startingPrice = document.getElementById('start-price').value;
    const category = document.getElementById('category').value;
    const currency = document.getElementById('currency').value;

    const specs = getSpecs();
    const files = getPicture();
    const formData = new FormData();
    formData.append('itemName',itemName);
    formData.append('description',description);
    formData.append('newItemSpecifications',JSON.stringify(specs));
    for (let i = 0; i<files.length;i++){
        formData.append(`itemPictures`, files[i])
    }
    formData.append('categoryID',parseInt(category));
    formData.append('price',startingPrice);
    formData.append('currency',currency);

    const token = localStorage.getItem('jwt');
    fetch('https://localhost:44301/api/Item/add-item', {
        method: 'POST',
        mode: 'cors',
        headers: {"Authorization" : `Bearer ${token}`},
        body: formData
    })
    .then(()=>setMessage('Predmet je dodat na licitaciju!'))
    .catch(() => setMessage('Nastala je greska prilikom dodaje, proverite unete informacije!'));
}



  return (
    <CentralFormContainer>
        <h1 className='form-title'>Novi predmet</h1>
        <form onSubmit={addItem}>
            <input type="text" name="itemName" id="item-name" placeholder="Ime predmeta za licitaciju" className="input-field"/>
            <input type="text" name="description" id="description" placeholder="Opis" className="input-field"/>
            <input type='number' placeholder = 'Pocetna cena' className="input-field" id='start-price'/>
            <label htmlFor="category">Kategorija</label>
            <select className="input-field category-dropdown" id='category' name='category'>
                <option value="1">Racunari</option>
                <option value="3">Automobili</option>
                <option value="4">Bela tehnika</option>
                <option value="5">Delovi za auta</option>
                <option value="6">Mobilni telefoni</option>
            </select>
            <label htmlFor="category">Valuta</label>
            <select className="input-field category-dropdown" id='currency' name='currency'>
                <option value="1">RSD</option>
                <option value="3">Automobili</option>
                <option value="4">Bela tehnika</option>
                <option value="5">Delovi za auta</option>
                <option value="6">Mobilni telefoni</option>
            </select>

            <label htmlFor="">Specifikacije predmeta</label>
            <div className="item-specs" >

            </div>
            <button className='light-blue-bg-white-txt-btn add-specification-btn' onClick={addSpecification}>Nova specifikacija</button> <br />
            <input type="file" name="ItemPictures" id="item-photo" multiple className="input-field"/>
            <input type='submit' className='light-blue-bg-white-txt-btn central-form-submit-btn' value='Postavi proizvod za prodaju' />
        </form>
        <span className='message'>{message}</span>
    </CentralFormContainer>
  )
}
