import React from "react";
import QuantityOfItems from "../component/quantityofitems.jsx";
import PromoCode from "../component/promocode.jsx";
import Total from "../component/total.jsx";
import Coupon from "../component/coupon.jsx";
<<<<<<< HEAD
import List from "../component/list.jsx"
=======
import Price from "../component/price.jsx";
import Form from "../component/form.jsx";

>>>>>>> f98f1fefdee1df0ce9c87b494d978aabd9ce6bf3

export class Checkout extends React.Component{
    render(){
        return(
            <div  className = "container">
                <div className = "row">
                    <Form />
                    <div style = {{width: "300px", margin: "100px"}}>
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
            );}}
            

export default Checkout;




