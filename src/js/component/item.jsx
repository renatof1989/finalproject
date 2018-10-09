import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

function Item(props){
        return(
            <div style = {{borderBottom: "1px solid #acadaf"}}>
                <div style = {{float: 'right', fontSize: "15px"}}><strong>${props.price}</strong></div>
            
                <h5>{props.name}</h5>
                <div className = "d-flex justify-content-between">
                    <p style = {{opacity: "0.7"}}>{props.description}</p>
                    <span onClick={props.chiken}><FontAwesomeIcon icon="trash" /></span>
                </div>
            </div>);
        
  
}
    
  

Item.props = {
    name: PropTypes.string,
    descripton: PropTypes.string,
    
};

export default Item;