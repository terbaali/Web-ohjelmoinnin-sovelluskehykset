import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import ProductsContainer from './components/ProductsContainer';
import AdminView from './components/AdminView';
import axios from 'axios';

function App() {

  const [ productList, setProductList ] = useState([]);
  const [ searchArgument, setSearchArgument ] = useState({ category: '' , search: '' });
  const [ AdminMode, setAdminMode ] = useState(false);

  useEffect(() => {
    getData().then(setProductList);
  }, []);

  async function getData() {
    const results = await axios.get('products.json');
    return results.data;
  }

  const searchHandler = (pickedCategory, searchText) => {
    var newSearchArgument = {
      'category': pickedCategory,
      'search': searchText
    };
    setSearchArgument(newSearchArgument);
    getData().then(function(res){setProductList(searchEngine(res,newSearchArgument))});
  }

  const searchEngine = (products, searchArgument) => {
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
  
  let output =  <ProductsContainer 
    products={ productList }
    addImage={ addImg }
  />;
  if( AdminMode == true ) {
    output = <AdminView/>;
  }

  return (
    <div>
      <Header 
        addImage={ addImg }
        searchResult={ productList }
        onAddClick={ searchHandler }
        adminMode={ AdminMode }
        setAdminMode={ setAdminMode }
      />
      <div className="flex marginT100">
         {/* <FilterPanel 
          proudctsInfo={ products } 
          productList={ productList }
          filter={ filterHandler }
         /> */ }
        { output }
      </div>
    </div>
  )
}

export default App;