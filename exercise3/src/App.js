import './App.css';
import {  useState } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import ProductsContainer from './components/ProductsContainer';
import Testi from './components/Testi';

function App() {

  const products = [
    {
      type: 'IPhone',
      brand: 'Apple',
      review: 4,
      price: 1800,
      img: 'iphone.jpg',
      category: 'Phones',
      additionals: 'sale',
      tags: ['phone','flex','money','rich']
    },
    {
      type: '3310',
      brand: 'Nokia',
      review: 5,
      price: 800,
      img: 'nokia_3310.jpg',
      category: 'Phones',
      additionals: 'bestseller',
      tags: ['phone','doomsday preppers','unbreakable','hammer']
    },
    {
      type: 'Mikro-Mikko',
      brand: 'Nokia',
      review: 4,
      price: 3800,
      img: 'mikromikko.png',
      category: 'Computers',
      additionals: '',
      tags: ['computer','nerd','coding','pure power','cpu']
    },
    {
      type: 'Amiga 500',
      brand: 'Commodore',
      review: 2,
      price: 1800,
      img: 'amiga500.png',
      category: 'Computers',
      additionals: '',
      tags: ['computer','gaming']
    },
    {
      type: '64',
      brand: 'Commodore',
      review: 3,
      price: 2000,
      img: 'commondore64.jpg',
      category: 'Computers',
      additionals: '',
      tags: ['computer','gaming','nerd','long nerves']
    },
    {
      type: 'C64 Addition Device Bundle',
      brand: 'Commodore',
      review: 3,
      price: 500,
      img: 'deviceBundle.jpg',
      category: 'Accessory',
      additionals: '',
      tags: ['computer','gaming','disk']
    },
    {
      type: 'C64 Turbo Tape Kit',
      brand: 'Individual Computers',
      review: 5,
      price: 150,
      img: 'c64turbo.jpg',
      category: 'Accessory',
      additionals: '',
      tags: ['computer','gaming','uppgrade','overclock']
    },
    {
      type: '9000 Communicator',
      brand: 'Nokia',
      review: 4,
      price: 3500,
      img: 'nokia_n9000.png',
      category: 'Phones',
      additionals: '',
      tags: ['communicator','smartphone','wow new cool thing','ceo']
    },
    {
      type: 'Basic phone',
      brand: 'Phone inc',
      review: 1,
      price: 50,
      img: 'phone.jpg',
      category: 'Phones',
      additionals: 'sale',
      tags: ['ugly','depression','react','equals','suicide']
    },
    {
      type: 'Macintosh Portable',
      brand: 'Apple',
      review: 3,
      price: 5500,
      img: 'applemac.jpg',
      category: 'Computers',
      additionals: '',
      tags: ['computer','gaming','laptop','snob']
    },
    {
      type: 'PlayStation',
      brand: 'Sony',
      review: 5,
      price: 900,
      img: 'ps1.jpg',
      category: 'Gaming',
      additionals: 'bestseller',
      tags: ['console','ps']
    },
    {
      type: 'NES',
      brand: 'Nindendo',
      review: 4,
      price: 800,
      img: 'nes.jpg',
      category: 'Gaming',
      additionals: 'bestseller',
      tags: ['console']
    },
    {
      type: 'Pre-order  Unforgettable weekend package  | Torihotelli Oulu',
      brand: 'Hallikainen Co',
      review: 1,
      price: 5000,
      img: 'torihotelli.jpg',
      category: 'Misc',
      additionals: 'Delivery time: unknown',
      tags: ['wait', 'mitä Oulussa voi tehdä']
    },
    {
      type: 'Death Star',
      brand: 'Imperial Military',
      review: 5,
      price: 666000000000000000,
      img: 'deathstar.jpg',
      category: 'Misc',
      additionals: 'limited',
      tags: ['doomsday machine','dark side', 'ruler of the universe', 'happy days','vapiskaa Terot']
    }
  ];
  
  const [ productList, setProductList ] = useState(products);
  const [ searchArgument, setSearchArgument ] = useState({ category: '' , search: 'nokia' });
  const [ filterSetting, setFilterSetting ] = useState(" ");
   
  const searchHandler = (pickedCategory, searchText) => {
    console.log("searchHandler");
    console.log(pickedCategory)
    console.log(searchText)
    console.log(searchArgument);

    var newSearchArgument = {
      'category': pickedCategory,
      'search': searchText
    };
    setSearchArgument( newSearchArgument );
    console.log(searchArgument);
    setProductList(searchEngine(newSearchArgument));
  }

  const searchEngine = (searchArgument) => {
    console.log("searchEngine");
    console.log(searchArgument);
    var search = searchArgument.search.toString().toLowerCase().trim();
    var searchResult = products.filter(item => {
      return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search));
    });
    searchResult = searchResult.filter(item => item.category.includes(searchArgument.category));
    return searchResult;
  }

  /*
  const filterHandler = (newFilterSetting) => {
    console.log('filterHandler');
    console.log(newFilterSetting);
    //setFilterSetting(newFilterSetting);
    //setProductList(searchEngine()); 
  }

  const filterEngine = (filterSetting) => {
    let dataTofilter = searchEngine();

  } 
  */

  const addImg = (file, size, alt) => {
    return(
      <img alt={ alt }  width={ size } src={ file }/>
    )
  }
  

  return (
    <div>
      <Header 
        productsInfo={ products }
        addImage={ addImg }
        searchResult={ productList }
        onAddClick={ searchHandler }
        searchArguments={ searchArgument }
      />
      <div className="flex marginT100">
         {/* <FilterPanel     // On vasta ajatustasolla, ei oo ollu intoa kirjottaa
          proudctsInfo={ products } 
          productList={ productList }
          filter={ filterHandler }
         /> 
        <Testi 
          productList={ productList }
          search={ searchArgument }
          addImage={ addImg }
        /> */ }
        <ProductsContainer 
        products={ productList }
        addImage={ addImg }
        />
      </div>
    </div>
  )
}

export default App;