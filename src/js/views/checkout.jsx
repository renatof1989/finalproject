import React from "react";
import QuantityOfItems from "../component/quantityofitems.jsx";
import PromoCode from "../component/promocode.jsx";
import Total from "../component/total.jsx";
import Coupon from "../component/coupon.jsx";


import Form from "../component/form.jsx";
import List from "../component/list.jsx";

export class Checkout extends React.Component{
    render(){
        return(
            <div  className = "container">
                <div className = "row mt-3">
                    <div className="col-11 d-flex justify-content-center mx-auto">
                        <Form />
                        <div className="col-5">
                            <QuantityOfItems />
                            <h3 style = {{opacity: "0.7"}}>Your cart</h3> 
                            <div style = {{backgroundColor: "white", borderRadius: "5px", border: "1px solid #acadaf", padding: "15px"}}>
                                <List />
                                <PromoCode />
                                <Total />
                            </div>
                            
                            <Coupon />
                        </div>
                    </div>
                </div>
            </div>
                );}}
            

export default Checkout;
