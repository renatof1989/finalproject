import React from 'react';
import PropTypes from 'prop-types';

export function CarouselItem(props) {
    return (
        <div className={"carousel-item " + props.isActive}>
            <img className={props.whichSilde + "-slide"} src={props.image} alt="Generic slide"></img>
            <div className="container">
                <div className={"carousel-caption" + props.textDirection}>
                    <h1>{props.header}</h1>
                    <p>{props.body}</p>
                    <p><a className="btn btn-lg btn-primary" href={props.link} role="button">Sign up today</a></p>
                </div>
            </div>
        </div>
    );
}
CarouselItem.propTypes = {
    isActive: PropTypes.string,
    whichSilde: PropTypes.string,
    image: PropTypes.string,
    textDirection: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
    link: PropTypes.string
};

//"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

export default CarouselItem;