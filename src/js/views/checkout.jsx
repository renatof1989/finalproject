import React from "react";
//import ReactDOM from "react";


export class Checkout extends React.Component{
    render(){
        return(
            <div  className = "container">
                <div className = "row">
                    <div className = "col-3">
                        <h3 style = {{opacity: "0.7"}}>Your cart</h3> 
                    {/*<QuantityOfItems />*/}
                        <div style = {{backgroundColor: "white", borderRadius: "5px", border: "1px solid #acadaf", padding: "15px"}}>
                            <Item />
                            <Item />
                            <Item />
                            <PromoCode />
                            <Total />
                        </div>
                    </div>
                </div>
            </div>
            );}}
            

export default Checkout;

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
                        <div style = {{float: "right", opacity: "0.7"}}>
                        $20.00
                        </div>
                        <p style = {{opacity: "0.7"}}>{this.state.itemDescription}</p>
                        
            </div>);
        
    }
}


function PromoCode(){
    return(
        <div style = {{borderBottom: "1px solid #acadaf"}}>
            <h5 style = {{color: "green"}}>Promo code</h5>
            <p style = {{opacity: "0.7", color: "green"}}>Some Promo Code</p>
        </div>);
    
}

function Total(){
    return(
        <div style = {{borderBottom: "1px solid #acadaf"}}>
            <h5 style = {{}}>Total</h5>
        </div>
        );
}
        
    