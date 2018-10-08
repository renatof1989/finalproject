import React from "react";
import QuantityOfItems from "../component/quantityofitems.jsx";
import PromoCode from "../component/promocode.jsx";
import Total from "../component/total.jsx";
import Coupon from "../component/coupon.jsx";
import Form from "../component/form.jsx";
import {Context} from '../store/appContext.jsx';

import List from "../component/list.jsx";

export class Checkout extends React.Component{
    render(){
        return(
             <Context.Consumer>
                {
                     ({store}) => {
                        
                        return(
            
                            <div  className = "container">
                                <div className = "row">
                                    <Form />
                                    <div style = {{width: "300px", margin: "100px"}}>
                                        <QuantityOfItems number =  {store.cart.length}/>
                                                       
                                        <h3 style = {{opacity: "0.7"}}>Your cart</h3> 
                                        <div style = {{backgroundColor: "white", borderRadius: "5px", border: "1px solid #acadaf", padding: "15px"}}>
                                            <List />
                                            <PromoCode />
                                            <Total />
                                        </div>
                                        
                                        <Coupon />
                                    </div>
                                </div>
                            </div>);
                     }
                    
                }
                </Context.Consumer>
            );
        }
    }
                            
export default Checkout;