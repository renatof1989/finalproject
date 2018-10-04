import React from "react";
import Price from "../component/price.jsx";
import PropTypes from 'prop-types';

function Item(props){
        return(
            <div style = {{borderBottom: "1px solid #acadaf"}}>
                <h5>{props.name}</h5>
            
                <p style = {{opacity: "0.7"}}>{props.description}</p>
                        
            </div>);
        
    }
    
    /*
Timer.propTypes = {
    first:PropTypes.number,
    second:PropTypes.number,
    third:PropTypes.number,
    fourth:PropTypes.number,
    last:PropTypes.number
};
*/

Item.props = {
    name: PropTypes.string,
    descripton: PropTypes.string
};

export default Item;