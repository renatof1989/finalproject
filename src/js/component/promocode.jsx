import React from "react";
import {Context} from '../store/appContext.jsx';
function PromoCode(){
    
    return(<Context.Consumer>
        {
            ({store}) => {
                let total = 0;
                store.cart.forEach((item, index) => {total = total+item.price;});
                let discount = total * .1;
                return(
                    <div style = {{borderBottom: "1px solid #acadaf"}}>
                        <h5 style = {{color: "green"}}>Promo code</h5>
                        <div style = {{float: "right", opacity: "0.7", color: "green"}}>{'-$' + (discount.toFixed(2))}</div>
                        <p style = {{opacity: "0.7", color: "green"}}>Some Promo Code</p>
                    </div>);
    
}}
    </Context.Consumer>
    );
}

export default PromoCode;