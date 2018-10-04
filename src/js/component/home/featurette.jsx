import React from 'react';
import PropTypes from 'prop-types';

export function Featurette(props) {
    return (
        <div className="row featurette">
            <div className={props.isReverse ? "col-md-7 order-md-2 my-auto" : "col-md-7 my-auto"}>
                <h2 className="featurette-heading"
                    style={{fontWeight: "400", fontSize: "50px"}}>
                    {props.name}<br /><span className="text-muted">${props.price}</span>
                    </h2>
                <p style={{fontSize: "1.6rem"}}>{props.description}</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" 
                data-src="holder.js/500x500/auto" alt="500x500" 
                style={{width: "500px", height: "500px"}}                            
                src={props.image} 
                data-holder-rendered="true">
                </img>
            </div>
        </div>
    );
}
Featurette.propTypes = {
    isReverse: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

export default Featurette;