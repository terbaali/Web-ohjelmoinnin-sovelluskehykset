import './App.css';
import ShoppingListContent from './components/ShoppingListContent';
import Title from './components/Title';
import Buttons from './components/Buttons';
import { useState } from 'react';


function App() {
  
  const [ shoppingListItems, setShoppingListItems ] = useState([
    {
      name: 'Milk',
      qty: 5,
      unit: 'ltr',
    },
    { 
      name: 'Bananas',
      qty: 6,
      unit: 'pcs'
    },
    { 
      name: 'Bread',
      qty: 3,
      unit: 'x'
    },
    { 
      name: 'Eggs',
      qty: 16,
      unit: 'x'
    }  
  ]);

  const itemsToAddToSoppingList = [
    {
      name: 'carrots',
      unit: 'x'
    },
    {
      name: 'strawberries',
      unit: 'kg'
    },
    {
      name: 'yoghurt',
      unit: 'pcs'
    },
    {
      name: 'beer',
      unit: 'cans'
    },
  ]

  function getRandomQty() {
    let maxRandomQuantity = 6;
    return Math.floor(Math.random() * maxRandomQuantity + 1);
  }

  const handleItemChekkedToggle = (item) => {
    let newShoppingListItems = [...shoppingListItems];
    let itemClickedIndex = newShoppingListItems.findIndex(i => itemsToAddToSoppingList[item].name === i.name)

    if(itemClickedIndex != -1){
      let newElement = {...newShoppingListItems[itemClickedIndex]}
      newElement.qty += getRandomQty();
      newShoppingListItems[itemClickedIndex] = newElement;
    }
    else
    {
      let newElement = [...newShoppingListItems,
      {
        name: itemsToAddToSoppingList[item].name,
        qty: getRandomQty(),
        unit: itemsToAddToSoppingList[item].unit
      }]
      newShoppingListItems = newElement;
    }
    setShoppingListItems(newShoppingListItems);
  }

  return (
    <div className="borders5W00">
      <Title/>
      <ShoppingListContent propsi={ shoppingListItems }/>
      <Buttons itemsToAdd={ itemsToAddToSoppingList } addItemClickedEvent={ handleItemChekkedToggle }/>
    </div>
  )
}

export default App;
