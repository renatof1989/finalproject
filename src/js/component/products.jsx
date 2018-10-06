import React from 'react';

import {Context} from '../store/appContext.jsx';

 

function Products () {
    
   return (
       <Context.Consumer>
           {
            ({store}) => {
                return (
                    store.products.map((item, index) => {
                    
                    if(index===0) {
                        return (
                    
                            <div key={index} className="cards bg-light text-dark col-12 mx-auto text-center">
                                <h2 className="pt-4 text-dark">{item.name}</h2>
                                <p className="text-dark">{item.description}</p>
                                <h3>{'$'+item.price}</h3> 
                                <div id="product1" className="card bg-light col-xs-12 col-lg-9">
                                    <img className="mt-4 mb-4" src={item.image} alt="product"/>
                                    <button id="purchase" type="button" className="btn btn-primary text-light pb-2 btn-lg border-dark">Add to cart</button>
                                </div>
                            </div>
                    )}
                    
                    
                    return (
                        <div className="cards bg-light text-dark col-xs-12 col-lg-6 text-center">
                            <h2 className="pt-5 text-dark">{item.name}</h2>
                            <p id="description" className="mb-4 text-dark">{item.description}</p>
                            <div>
                                <h3>{'$'+item.price}</h3> 
                            </div>
                            <div id="product1" className="mt-3 card bg-light col-xs-12 col-lg-9">
                                <img className="mt-3 mb-3" src={item.image} alt="product"/>
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

export default Products;