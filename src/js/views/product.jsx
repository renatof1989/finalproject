import React from "react";

import Products from '../component/products.jsx'

import Jumbotron from '../component/jumbotron.jsx'

export class Product extends React.Component{
    render(){
        return(
        <React.Fragment>
            <Jumbotron />
            <div className="container-fluid">
                <div className="row">
                    <Products />
                    <Products />
                </div>
                <div className="row">
                    <Products />
                    <Products />
                </div>
            </div>
        </React.Fragment>
            );
    }
}