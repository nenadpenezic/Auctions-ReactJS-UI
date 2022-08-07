import React from 'react'
import { useState } from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'
import { useNavigate } from 'react-router-dom';
import './AddProductStyle.css'
export const AddProduct = () => {

    const [itemName,setItemName]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("");
    
    const navigate = useNavigate();

    const addSpecification=()=>{
        const specContainer = document.createElement('div');
        specContainer.className = 'item-specs__spec';

        const specName = document.createElement('input');

        specName.className = 'input-field spec-name';
        specName.placeholder = 'Specification name';
        specName.type = 'text';
        //specName.onchange = (event)=>setName(event.target.value);

        const specValue = document.createElement('input');

        specValue.className = 'input-field spec-value';
        specValue.placeholder = 'Specification value';
        specValue.type = 'text';

        //specValue.onchange = (event)=>setName(event.target.value);
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
                specificationName:specName.value,
                specificationValue:specValue.value
            }
        }
        console.log(specsValues);
        return specsValues;
    }

const addItemApi=()=>{
    const token = localStorage.getItem('jwt');
    console.log(category)
    fetch('https://localhost:44301/api/Item/add-item', {
        method: 'POST',
        headers: {'Content-Type':'application/json',
                    "Authorization" : `Bearer ${token}`},
        body: JSON.stringify({
          ItemName:itemName,
          Description:description,
          NewItemSpecifications:getSpecs(),
          CategoryID:category
        })
    })
    .then(()=>navigate("/"))
    .catch(res => console.log(res));
}


  return (
    <CentralFormContainer>
        <input type="text" name="Item_name" id="" placeholder="Item name" className="input-field" onChange={(event)=>setItemName(event.target.value)}/>
        <input type="text" name="Description" id="" placeholder="Description" className="input-field" onChange={(event)=>setDescription(event.target.value)}/>
        <select className="input-field category-dropdown"  onChange={(event)=>setCategory(event.target.value)}>
        <option value="2">Racunari</option>
            <option value="3">Automobili</option>
            <option value="4">Bela tehnika</option>
            <option value="5">Delovi za auta</option>
            <option value="6">Mobilni telefoni</option>
        </select>
        <div>Item specification</div>
        <div className="item-specs" >

        </div>
        <button className='light-blue-bg-white-txt-btn add-specification-btn' onClick={addSpecification}>Add Specification</button> <br />
        <button className='light-blue-bg-white-txt-btn' onClick={addItemApi}>Add product to sell.</button>
    </CentralFormContainer>
  )
}