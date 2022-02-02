import React from 'react';

export default function ShoppingListContent(props) {
  return (
    <ul className="noMarkers">
      {
        props.propsi.map((item, index) => {
            return( 
              <li className="pinkBG marginB2 pro" key={ index }><pre>
                  { item.qty }{ item.unit } { item.name } { item.qty<12 && item.name=="beer" ? "     mayby couple more:)" : null }
              </pre></li>
            )
        })
      } 
    </ul>
  )
}
