import React from 'react';
import PropTypes from 'prop-types';

export function Card(props) {
    
    return (
        <div className="card col-lg-4">
            <img className="rounded-circle" src={props.image} alt="" width="140px" height="140px"/>
            <div className="card-body">
                <h2>{props.header}</h2>
                <p>{props.body}</p>
            </div>
            <a className="btn btn-secondary" href="/blog" role="button">View Details</a>
        </div>
    );
}
Card.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string
}

export default Card;