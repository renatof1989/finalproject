import React from "react";

import Products from '../component/products.jsx'

import Banner from '../component/jumbotron.jsx'

import '../../styles/product.css';


export class Product extends React.Component{
    
    render(){
        return(
        <React.Fragment>
            <Banner />
            <div className="container-fluid">
                <div className="row">
                      <Products />
                </div>
            <button type="button" className="btn btn-primary btn-lg btn-block mt-2 mb-2">Proceed to checkout</button>
            </div>
        </React.Fragment>
            );
    }
}

export default Product;