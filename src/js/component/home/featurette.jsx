import React from 'react';
import PropTypes from 'prop-types';

export function Featurette(props) {
    return (
        <div className="row featurette">
            <div className={props.isReverse ? "col-md-7 order-md-2 my-auto" : "col-md-7 my-auto"}>
                <h2 className="featurette-heading"
                    style={{fontWeight: "400", lineHeight: "1", letterSpacing: "-0.05rem", fontSize: "50px"}}>
                    {props.header} <span className="text-muted">{props.headerSilent}</span>
                    </h2>
                <p className="lead">{props.body}</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" 
                data-src="holder.js/500x500/auto" alt="500x500" 
                style={{width: "500px", height: "500px"}}                            
                src={props.src} 
                data-holder-rendered="true">
                </img>
            </div>
        </div>
    );
}
Featurette.propTypes = {
    isReverse: PropTypes.bool,
    header: PropTypes.string,
    headerSilent: PropTypes.string,
    body: PropTypes.string,
    src: PropTypes.string
}

export default Featurette;