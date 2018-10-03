import React from "react";
import Price from "../component/price.jsx";
export class Item extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Product name",
            itemDescription: "Brief description",
            price: "Price"
        };
    }
    render(){
        return(
            <div style = {{borderBottom: "1px solid #acadaf"}}>
                <h5>{this.state.name}</h5>
                <Price />
                <p style = {{opacity: "0.7"}}>{this.state.itemDescription}</p>
                        
            </div>);
        
    }
}
export default Item;