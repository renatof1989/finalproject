import React from 'react';
import CarouselItem from "./carousel-item.jsx";

export function Carousel() {
    
    return (
        
        <div id="myCarousel top" className="carousel slide" data-ride="carousel" style={{marginTop: "1000px"}}>
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
            </ol>
            <div className="carousel-inner">
                <CarouselItem isActive="active" whichSilde="first" 
                              image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                              textDirection=" text-left" header="Example headline."
                              body="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
                              link="/blog" />
                <CarouselItem isActive="" whichSilde="second" 
                              image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                              textDirection="" header="Another example headline."
                              body="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
                              link="/blog" />
                <CarouselItem isActive="" whichSilde="third" 
                              image="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                              textDirection=" text-right" header="One more for good measure."
                              body="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
                              link="/blog" />
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}