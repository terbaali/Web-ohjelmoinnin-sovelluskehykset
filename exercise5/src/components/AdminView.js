import React from 'react'
import {  useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminView() {

  const [ productList, setProductList ] = useState([]);

  useEffect(() => {
    async function getData() {
      const results = await axios.get('products.json');
      console.log("haetaan tuotteet");
      return results.data;
    }
    getData().then(setProductList);
  }, []);

  const onItemDelete = (item) => {
    let newProductList = [...productList];
    let deleteItemIndex = newProductList.findIndex(i => i.id === item.id);
    newProductList.splice(deleteItemIndex, 1);
    setProductList(newProductList);
  }

  const onItemAdd = (event) => {
    event.preventDefault();
    console.log(event.target.brand.value);
    
    let newProductList = [...productList];
    console.log(newProductList);
    let newElement = [...newProductList,
    {
      id: productList.length+1,
      type: event.target.type.value,
      brand: event.target.brand.value,
      rating: event.target.rating.value,
      price: event.target.price.value,
      img: event.target.img.value,
      category: event.target.category.value,
      additionals: event.target.additionals.value,
      tags: event.target.tags.value
    }];
    newProductList = newElement;
    console.log(newProductList);
    setProductList(newProductList);
  }

  return (
    <div>
      <h1>kukkuluuruu</h1>
      <div className='marginLT10 W700'>
        <h3>Add new product</h3>
        <form onSubmit={ onItemAdd }>
            <div>Manufacturer: <input type="text" name="brand"/></div>
            <div>Model: <input type="text" name="type"/></div>
            <div>category: <input type="text" name="category"/></div>
            <div>Price: <input type="number" name="price"/></div>
            <div>Rating: <input type="number" name="rating"/></div>
            <div>Image: <input type="text" name="img"/></div>
            <div>Additionals: <input type="text" name="additionals"/></div>
            <div>Search tags: <input type="text" name="tags"/></div>
            <button>Add</button>
        </form>
 
      </div>
      <div className='marginLT10 W700'>
        <h3>Delete items</h3>
        { productList.map(item => <div>{item.brand} {item.type}  <button onClick={()=> onItemDelete(item)}>Delete</button></div>) }
      </div>
    </div>
  )
}
