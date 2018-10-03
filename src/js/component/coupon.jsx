import React from "react";
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
export default Coupon;