import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCog, faSignOutAlt, fasignout } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Header(props) {

  const [ categories, setCategories ] = useState([]);
  const [ category, setCategory ] = useState("");
  const [ searchBarText, setSearchBarText ] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleSearchBarTextChange = (event) => {
    setSearchBarText(event.target.value);
  }
  
  useEffect(() => {
    function manageCategories(values){
      var checkList = [];
      values.map((item) => {
        return checkList.includes(item.category) ? null : checkList.push(item.category)
      });
      setCategories(checkList);
    }
    async function getData() {
      const results = await axios.get('products.json');
      return results.data;
    }
    getData().then(manageCategories);
  }, []);
  
  const CreateOptions = (props) => {
    return(
      props.data.map((item) => {
        return <option value={item}> {item} </option>;
      })
    )
  }
  
  return(
    <div className="stikyHeader">
      <div className="headerUpper flex justifySpaceAround">
        <div className="menuElement W230">{ props.addImage('amatsooni.PNG', '100%', "Amatsooni") } </div>
        <form className={ props.adminMode === true ? "menuElement hidden" : "menuElement" } > 
          <div className="menuElement flex W700">
            <select className="categorySelect" name="category" onChange={ handleCategoryChange } value={ category }>
  	          <option value="">All categories</option>
               <CreateOptions data={ categories }/> 
            </select>
            <input className="searchBar" type="text" name="search" 
            onChange={ handleSearchBarTextChange } value={ searchBarText }/>
            <button className="searchBarButton orangeBG" type="button"  onClick={ () => props.onAddClick( category, searchBarText ) }>
              <FontAwesomeIcon icon={ faSearch } size="1x"/>
            </button>
          </div>
        </form> 
        <div className="menuElement W230 adminMode">
          <button className="adminModeButton" type="button" 
            onClick={ () => props.setAdminMode( !props.adminMode ) }>
            { props.adminMode === true ? 
              <span>LogOut <FontAwesomeIcon icon={ faSignOutAlt } size="1x"/></span> : 
              <span>Admin Mode <FontAwesomeIcon icon={ faCog } size="1x"/></span> 
            }
          </button>
        </div>
      </div>
      <div className="headerLower">
        {
          props.adminMode === true ? <h2 className="margin0"> Logged in AdminMode </h2> : null
        }
      </div>
    </div>
  )
}

