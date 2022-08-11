import React from 'react'
import { useState } from 'react'
import { CentralFormContainer } from '../../components/CentralFormContainer/CentralFormContainer'
import { useNavigate } from 'react-router-dom';
import './AddProductStyle.css'
export const AddProduct = () => {

    const [itemName,setItemName]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState(1);
    const [picture,setPicture]=useState();
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
                SpecificationName:specName.value,
                SpecificationValue:specValue.value
            }
        }
        return specsValues;
    }
const getPicture=()=>{
    const itemPhoto = document.getElementById('item-photo');
    return itemPhoto.files[0];
}
const addItemApi=()=>{
    const specs = getSpecs();
    const formData = new FormData();
    formData.append('itemName',itemName);
    formData.append('description',description);
    formData.append('newItemSpecifications',JSON.stringify(specs));
    formData.append('itemPicture', getPicture())
    

    formData.append('categoryID',parseInt(category));
    //formData.append('formFile',getPicture());

    console.log(specs)


    const token = localStorage.getItem('jwt');
    console.log(picture)
    fetch('https://localhost:44301/api/Item/add-item', {
        method: 'POST',
        mode: 'cors',
        headers: {"Authorization" : `Bearer ${token}`},
        body: formData
        
        //JSON.stringify({
          //itemName:itemName,
          //description:description,
          //newItemSpecifications:getSpecs(),
          //categoryID:parseInt(category),
          //formFile:getPicture()
        //})
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(res => console.log(res));
}



  return (
    <CentralFormContainer>
        <input type="text" name="itemName" id="" placeholder="Item name" className="input-field" onChange={(event)=>setItemName(event.target.value)}/>
        <input type="text" name="description" id="" placeholder="Description" className="input-field" onChange={(event)=>setDescription(event.target.value)}/>
        <select className="input-field category-dropdown"  onChange={(event)=>setCategory(event.target.value)}>
            <option value="1">Racunari</option>
            <option value="3">Automobili</option>
            <option value="4">Bela tehnika</option>
            <option value="5">Delovi za auta</option>
            <option value="6">Mobilni telefoni</option>
        </select>
        <div>Item specification</div>
        <div className="item-specs" >

        </div>
        <button className='light-blue-bg-white-txt-btn add-specification-btn' onClick={addSpecification}>Add Specification</button> <br />
        <input type="file" name="" id="item-photo" />
        <button className='light-blue-bg-white-txt-btn' onClick={addItemApi}>Add product to sell.</button>
    </CentralFormContainer>
  )
}
