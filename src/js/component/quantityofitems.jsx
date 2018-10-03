import React from "react";

class QuantityOfItems extends React.Component{
    constructor(){
        super();
        this.state = {
        number: "3"
    };
    }
    render(){
        return(
            <div style= {{float: "right", marginTop: "7px", backgroundColor: "#7b7e84", borderRadius: "40px", width: "40px", height: "30px"}}>
                <h5 style = {{textAlign: "center", marginTop: "2px", color: "white"}}>{this.state.number}</h5>
            </div>
            );
    }
}

export default QuantityOfItems;