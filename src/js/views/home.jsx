import React from "react";

import {OurCarousel} from "../component/home/carousel.jsx";
import {Card} from "../component/home/card.jsx";
import {Featurette} from "../component/home/featurette.jsx";

import {Context} from '../store/appContext.jsx';

export class Home extends React.Component{
    render(){
        return(
            <div>
                <main role="main" style={{backgroundColor: "white", marginTop: "56px"}}>
                    <h1 className="text-center pt-4">Carousel in progress</h1>
                    <Context.Consumer>
                        {
                            ({store}) => {
                                return <OurCarousel items={
                                                store.posts.filter((item, index) => {return (index < 3)}).map((item, index) => {
                                                    return (
                                                        {
                                                            src: item.image,
                                                            altText: item.title,
                                                            caption: item.content
                                                        }
                                                    );
                                                })
                                            }
                                    />;
                            }
                        }
                    </Context.Consumer>
                    
                    <div className="container mb-3">
                        <div className="row pt-5" style={{textAlign: "center"}}>
                            <Context.Consumer>
                                {
                                    ({store}) => {
                                        return (
                                            store.posts.filter((item, index) => {return (index > 2)}).map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <Card thumbnail={item.thumbnail}
                                                              title={item.title}
                                                              content={item.content}
                                                              link="/blog"
                                                              /><col-lg-4 />
                                                    </React.Fragment>
                                                );
                                            })
                                        );
                                    }
                                }
                            </Context.Consumer>
                        </div>
                        
                        <Context.Consumer>
                            {
                                ({store,actions}) => {
                                    return (
                                        store.products.map((item, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <hr className="featurette-divider my-5" />
                        
                                                    <Featurette isReverse={(index % 2 === 0) ? false : true}
                                                                product={item}
                                                                button={
                                                                    <React.Fragment>
                                                                        <button className="btn btn-primary" onClick={() => actions.addProductToCart(item)}>Add to Cart</button>
                                                                    </React.Fragment>
                                                                }
                                                                />
                                                </React.Fragment>
                                            );
                                        })
                                    );
                                }
                            }
                        </Context.Consumer>
                    </div>
                    
                </main>
            </div>
        );
    }
}

export default Home;
