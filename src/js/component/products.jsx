import React from 'react';

import Store,{Context} from '../store/appContext.jsx';

 

function Products () {
    
   return (
       <Context.Consumer>
        {
            ({store}) => {
                return (
                    store.products.map((item, index) => {
                    return (
                    <div className="cards bg-light text-dark col-xs-12 col-lg-6 text-center">
                        <h2 className="pt-5 text-dark">{`${item.name}`}</h2>
                        <p className="pb-4 text-dark">{item.description}</p>
                        <h3 className="mb-1">{'$'+item.price}</h3> 
                        <div id="product1" className="card bg-light col-9">
                            <img src={item.image} alt="product"/>
                           <button id="purchase" type="button" className="btn btn-primary text-light pb-2 btn-lg border-dark">Add to cart</button>
                        </div>
                    </div>
                    );
                })
            )}
        }
       
       
            
       </Context.Consumer>

   );
}

export default Store(Products);