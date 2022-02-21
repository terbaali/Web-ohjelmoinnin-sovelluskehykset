import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function AdminView() {

  const [ productList, setProductList ] = useState([]);

  async function getData() {
    const results = await axios.get('http://localhost:3000/products/');
    return results.data;
  }
  
  useEffect(() => {
    getData().then(setProductList);
  }, []);

  const onItemDelete = (item) => {
    axios.delete('http://localhost:3000/products/'+item.id)
      .then(function (response) {
      console.log(response);
    }).then(function () {
      getData().then(setProductList);
    });
  }

  const onItemAdd = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/products/', {
      type: event.target.type.value,
      brand: event.target.brand.value,
      rating: event.target.rating.value,
      price: event.target.price.value,
      img: event.target.img.value,
      category: event.target.category.value,
      additionals: event.target.additionals.value,
      tags: event.target.tags.value
    }).then(function (response) {
      console.log(response);
    }).then(function () {
      getData().then(setProductList);
    });
  }
  
  const CreateProductList = (props) => {
    let setBgColor = true;
    return(
      props.products.map((item) => {
        setBgColor = !setBgColor;
        return (
          <div className={ setBgColor === true ? "flex productList blueBg" : "flex productList" }>
            <div className='productListItem id'>{ item.id }</div>
            <div className='productListItem'>{ item.brand }</div>
            <div className='productListItem W230'>{ item.type }</div>
            <div className='productListItem'>{ item.price }€</div>
            <div className='productListItem deleteButtonDiv'>
              <button className='deleteButton' onClick={()=> onItemDelete(item)}>Delete <FontAwesomeIcon icon={ faTrashAlt }/></button>
            </div>
          </div>  
        ) 
      })
    )
  }

  return (
    <div>
      <h1>kukkuluuruu</h1>
      <div className='editorContainer'>
        <h1>Product Management</h1>
        <div className='editorSection'>
          <h2>Product List</h2>
          <CreateProductList products={ productList }/> 
        </div>
        <div className='editorSection'>
          <h2>Add new product</h2>
          <form onSubmit={ onItemAdd }>
              <div className="addtiem"><div className='text'>Manufacturer: </div> <input type="text" name="brand"/></div>
              <div className="addtiem blueBg"><div className='text'>Model: </div> <input type="text" name="type"/></div>
              <div className="addtiem"><div className='text'>category: </div> <input type="text" name="category"/></div>
              <div className="addtiem blueBg"><div className='text'>Price: </div> <input type="number" name="price"/></div>
              <div className="addtiem"><div className='text'>Rating: </div> <input type="number" name="rating"/></div>
              <div className="addtiem blueBg"><div className='text'>Product image: </div> <input type="text" name="img"/></div>
              <div className="addtiem"><div className='text'>Additionals: </div> <input type="text" name="additionals"/></div>
              <div className="addtiem blueBg"><div className='text'>Search tags: </div> <input type="text" name="tags"/></div>
              <button className='deleteButton addButton'>Add product</button>
          </form>
        </div>
      </div>
    </div>
  )
}
