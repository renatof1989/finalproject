import React from "react";

import Products from '../component/products.jsx'

import Banner from '../component/jumbotron.jsx'

import '../../styles/product.css';

import Store,{Context} from '../store/appContext.jsx';


export class Product extends React.Component{
    
    
    /*
     <div className={`cards bg-${props.backgroundColor} text-${props.fontColor} col-xs-12 col-lg-6 text-center`}>
           <h2 className={`pt-5 text-${props.fontColor}`}>{`Product ${props.productColor}`}</h2>
           <p className={`pb-4 text-${props.fontColor}`}>{props.productDescription}</p>
           <h3 className="mb-1">{`$${props.price}`}</h3> 
           <div id="product1" className={`card bg-${props.productColor}  col-9`}>
               <button id="purchase" type="button" className={`btn btn-${props.fontColor} text-${props.backgroundColor} pb-2 btn-lg border-${props.backgroundColor}`}>Add to cart</button>
           </div>
           
           this.store.products.name
           this.store.products.image
           this.store.products.price
           this.store.products.description
    */
   
    
    
    render(){
        return(
        <React.Fragment>
            <Banner />
            <div className="container-fluid">
                <div className="row">
                
                
                </div>
            <button type="button" className="btn btn-primary btn-lg btn-block mt-2 mb-2">Proceed to checkout</button>
            </div>
        </React.Fragment>
            );
    }
}

