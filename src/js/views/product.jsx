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
                      <Products fontColor="dark" backgroundColor="light" 
                      productColor="dark" price={12} productDescription="Lorem 
                      ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque porta efficitur nibh at vestibulum. " />
                      <Products fontColor="light" backgroundColor="dark" 
                      productColor="light" price={12} productDescription="Sed 
                      placerat et lectus eget ullamcorper. Phasellus sollicitudin 
                      ipsum nibh, sit amet accumsan sapien blandit vel." />
                      <Products fontColor="warning" backgroundColor="dark" 
                      productColor="warning" price={15} productDescription="Curabitur 
                      lacinia sodales accumsan. Nullam id est vel ligula 
                      commodo tempus ac sit amet ipsum."  />
                      <Products fontColor="info" backgroundColor="light" 
                      productColor="info" price={15} productDescription="Nulla sed
                      metus vel ipsum euismod ultricies eget vel nibh. Curabitur 
                      dapibus odio et ante bibendum, in fringilla orci maximus." />
                      <Products fontColor="success" backgroundColor="light" 
                      productColor="success" price={20} productDescription="Proin 
                      quis laoreet purus. Nullam ut malesuada ipsum. Ut ex nisl, 
                      imperdiet a sagittis sit amet, consectetur suscipit diam." />
                      <Products fontColor="danger" backgroundColor="dark" 
                      productColor="danger" price={20} productDescription="Cras 
                      tellus magna, congue pharetra scelerisque non, tincidunt at 
                      arcu. Duis vitae nibh vitae." />
                </div>
            <button type="button" className="btn btn-primary btn-lg btn-block mt-2 mb-2">Proceed to checkout</button>
            </div>
        </React.Fragment>
            );
    }
}