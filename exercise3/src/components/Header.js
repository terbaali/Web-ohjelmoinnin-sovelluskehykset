import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMapMarkerAlt, faSearch} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Header(props) {

  const [ category, setCategory ] = useState("");
  const [ searchBarText, setSearchBarText ] = useState("");
  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  }
  const handleSearchBarTextChange = (event) => {
    setSearchBarText(event.target.value);
  }

  const CreateOptions = (props) => {
   
    var checkList = [];
    function createOption(item) {
      checkList.push(item);
      return <option value={item}> {item} </option>;
    }
    return(
      props.data.map((item) => {
        return checkList.includes(item.category) ? null : createOption(item.category)
      })
    )
  }//vittu kun ei osaa, ei edes googlata, niin joutuu tämmäsiä väkertään
  
  /*
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    var valueC = event.target.form[0].value;
    var valueS = event.target.form[1].value;

    props.SearchButtonClicked({ category : valueC , search : valueS });
    
    console.log(valueC);
    console.log(valueS);
    
    var inputElementValues = {};
    var inputElements = document.getElementsByClassName("searchInputElement");
    for (let i = 0; i < inputElements.length; i++) {
      inputElementValues[inputElements[i].name] = inputElements[i].value;
    };
    if(inputElementValues.search == "" &&  inputElementValues.category == ""){
      cancelSearch();
      console.log("öp");
    }
    else{
      console.log("haku");
      setter(1);
      props.search(inputElementValues);
    }
  }

  function cancelSearch(){
    setter(0);
    props.search({search:"",category:""});
  }

  function setter(toggle){
    let setSearchStatsVisible = toggle;
    return setSearchStatsVisible;
  }

  const SearchStats = (props) => {
    if(props.setVisible == 1){
      return(
        <div className="flex justifyCenter">
        </div>
      )
      



    }
  }*/
  
  return(
    <div className="stikyHeader">
      <div className="headerUpper flex justifySpaceAround">
        <div className="menuElement W230">{ props.addImage('amatsooni.PNG', '100%', "Amatsooni") } </div>
        <form className="menuElement" > 
          <div className="menuElement flex W700">
            <select className="categorySelect" name="category" onChange={ handleCategoryChange } value={ category }>
  	          <option value="">All categories</option>
              <CreateOptions data={ props.productsInfo }/>
            </select>
            <input className="searchBar" type="text" name="search" 
            onChange={ handleSearchBarTextChange } value={ searchBarText }/>
            <button className="searchBarButton orangeBG" type="button"  onClick={ () => props.onAddClick( category, searchBarText ) }>
              <FontAwesomeIcon icon={ faSearch } size="1x"/>
            </button>
          </div>
        </form> 
        <div className="W230"></div>
      </div>
      <div className="headerLower">
        {
          //<SearchStats productList={ props.productList} setVisible={ setter }/>
        }
      </div>
    </div>
  )
}

