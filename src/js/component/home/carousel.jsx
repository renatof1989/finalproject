import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    //Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


export class OurCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    
    this.items = props.items;
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.items.map((item) => {
      return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
            >
              <Link to="/blog">
                  <div className="text-center">
                      <img src={item.src} alt={item.altText} />
                  </div>
                  <div className="text-danger">
                      <CarouselCaption captionText={item.caption} captionHeader={item.caption} cssModule={{color: "red"}}/>
                  </div>
              </Link>
          </CarouselItem>
      );
    });

    return (
        <div className="bg-dark">
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                <CarouselIndicators items={this.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        </div>
    );
  }
}
OurCarousel.propTypes = {
  items: PropTypes.array
};

export default OurCarousel;