import React from 'react';
import PropTypes from 'prop-types';

export function Card(props) {
    
    return (
        <div className="col-lg-4">
            <img className="rounded-circle" src={props.thumbnail} alt="" width="140px" height="140px"/>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <a className="btn btn-secondary" href={props.href} role="button">View Details</a>
        </div>
    );
}
Card.propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}

export default Card;