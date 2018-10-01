import React from "react";
//import ReactDOM from "react";


export class Checkout extends React.Component{
    render(){
        return(
            <div  className = "container">
                <div className = "row">
                    <div style = {{width: "300px", margin: "100px"}}>
                        <h3 style = {{opacity: "0.7"}}>Your cart</h3> 
                    {/*<QuantityOfItems />*/}
                        <div style = {{backgroundColor: "white", borderRadius: "5px", border: "1px solid #acadaf", padding: "15px"}}>
                            <Item />
                            <Item />
                            <Item />
                            <PromoCode />
                            <Total />
                        </div>
                        
                        <Coupon />
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
            <div style = {{float: "right", opacity: "0.7", color: "green"}}>-$10.00</div>
            <p style = {{opacity: "0.7", color: "green"}}>Some Promo Code</p>
        </div>);
    
}

function Total(){
    return(
        <div>
            <div style = {{float: "right", opacity: "0.7"}}><br></br>$50.00</div>
            <h5 style = {{}}><br></br>Total (USD)</h5>
            
        </div>
        
        );
}

function Coupon(){
    return(
        <div style = {{marginTop: "15px"}}>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <div className="input-group-append">
                <button type="button" class="btn btn-secondary">Redeem</button>
            </div>
        </div>
        </div>
        );
}

function QuantityOfItems(){
    this.state = {
        number: "3"
    };
    return(
        <div>
        {this.state.number}
        </div>
        );
}