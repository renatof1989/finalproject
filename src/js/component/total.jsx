import React from "react";
import {Context} from '../store/appContext.jsx';
function Total(){
        return(<Context.Consumer>
            {
                    ({store}) => {
                        let total = 0;
                        store.cart.forEach((item, index) => {total = total+item.price;});
                        let discount = total * .1;
                        return(
                            <div >
                                <div style = {{float: "right", opacity: "0.7"}}><br></br>{'$' + (total - discount).toFixed(2)}</div>
                                <h5 style = {{}}><br></br>Total (USD)</h5>
                                
                            </div>
                           );
                     }}
        </Context.Consumer>
            );
    }
export default Total;