import React from 'react';

export default function Buttons(props) {

    function addItemCilck(element) {
        props.addItemClickedEvent(element);
    }
    
  return( 
    <div className="flex">
        {
            props.itemsToAdd.map((item, index) => {
                return <button onClick={ () => addItemCilck(index) } key={ index }>Add { item.name }</button>
            })
        }
    </div>
  )
}
