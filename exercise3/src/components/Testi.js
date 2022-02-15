import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faGrinStars} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Testi(props) {

    var data = [
        {name: 'Comoros', code: 'KM'}, 
        {name: 'Congo', code: 'CG'}, 
        {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
        {name: 'Cook Islands', code: 'CK'}, 
        {name: 'Costa Rica', code: 'CR'}, 
        {name: 'Cote D\'Ivoire', code: 'CI'}, 
        {name: 'Croatia', code: 'HR'}, 
        {name: 'Cuba', code: 'CU'}, 
        {name: 'Cyprus', code: 'CY'}]

    function test () {
    var data = [
        {
            type: 'IPhone',
            brand: 'Apple',
            review: 5,
            category: 'Phones',
            tags: 'phone'
          },
          {
            type: '3310',
            brand: 'Nokia',
            review: 5,
            category: 'Phones',
            tags: 'phone'
          },
          {
            type: 'Mikro-Mikko',
            brand: 'Nokia',
            review: 1,
            category: 'Computers',
            tags: ['computer','gaming']
          }
    ]
    // Object.keys(x)
    var search = 'gaming';
    var searchData = data.filter(item => item.tags.includes(search));
    console.log(searchData);
    }

    function test1 (search) {
        var data = [
            {
                type: 'IPhone',
                brand: 'Apple',
                review: 4,
                category: 'Phones',
                tags: 'phone'
              },
              {
                type: '3310',
                brand: 'Nokia',
                review: 5,
                category: 'Phones',
                tags: 'phone'
              },
              {
                type: 'Mikro-Mikko',
                brand: 'Nokia',
                review: 4,
                category: 'Computers',
                tags: ['computer']
              },
              {
                type: 'PCS 286S',
                brand: 'Olivetti',
                review: 3,
                category: 'Computers',
                tags: ['computer','gaming']
              }

        ]
        let newElement =[];

        console.log(search);
        var searchArgument = search.search.toString().toLowerCase().trim();
        var searchData = data.filter(item => {
            return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(searchArgument));
        });
              console.log(searchData);
              return(
                <div>
                  <ul>
                    {
                      searchData.map((item, index) => {
                          return( 
                            <li  key={index}>
                              { item.brand } { item.type }
                            </li>
                          )
                      })
                    } 
                  </ul>
                </div>
            )
        }    


    const test2 = (a) => {
        let b = [];
        a.map((i) => {
            return b.includes(i.brand) ? null:  b.push(i.brand)
        })
        return b;        
    }

    /*.map((item) => {
      return console.log(item.name);
    })*/
        
    

    const ShowProducts = (props) => {

      const review = (props) => {

        var arr = [];
        for(let i = props.type=='Death Star' ? -1 : 0; i < props.review ; i++) { 
          arr.push(<div> <FontAwesomeIcon icon={ faStar } />&nbsp;</div>);
        }; 
        for(let i = 0; i < 5 - props.review; i++) {
          arr.push(<div> <FontAwesomeIcon icon={ farStar } />&nbsp;</div>);
        };
        return(
          <div className="flex orange review">
            { 
              arr.map((item) => { return item })
            }
          </div>
        )
      }

      const specialInfoImg = (item) => {
        if(item != ''){
          switch (item) {
            case 'bestseller' : return props.addImage( 'bestseller.jpg', '35%', 'bestseller.jpg' );
            case 'limited'  : return props.addImage( 'limited.jpg', '30%', 'limited.jpg' );
            case 'sale'   : return props.addImage( 'sale.jpg', '30%', 'sale.jpg' );
            default : console.log("unknown additionals tag")
          }
        }
      }

      function thousandSeparator(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }

      return( 
        <div className="flex wrapContainer">
          {
            props.products.map((item, index) => {
              return( 
                <div className="productInfoContainer" key={index}>
                  <div className="specialInfo">
                    { specialInfoImg(item.additionals) }
                  </div>
                  <div className="productImg menuElement">
                    { props.addImage( item.img, '100%', item.img ) }
                  </div>
                  <div><h2> { item.type } </h2></div>
                  { item.type.includes('Pre-order') ? <h4>{ item.additionals }</h4> : null}
                  <div><h3> { item.brand } </h3></div>
                  { review(item) } 
                  <div>
                    { item.additionals=='sale' ? <h3><del>{ thousandSeparator(item.price) } €</del> &nbsp;{ thousandSeparator(item.price*0.5) } €</h3> :
                    <h3> { thousandSeparator(item.price) } € </h3> }
                    { item.type == 'Death Star' ? <h4>or your soul to the dark side</h4> : null } 
                  </div>
                </div>
              )
            })
          } 
        </div>
      )
    }

    

  return( 
    <div className="marginLT10">

      
      

      <ShowProducts products={ props.productList } addImage={ props.addImage }/>
    </div>
  )
}
