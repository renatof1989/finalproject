import React from "react";

import {OurCarousel} from "../component/home/carousel.jsx";
import {Card} from "../component/home/card.jsx";
import {Featurette} from "../component/home/featurette.jsx";

import {Context} from '../store/appContext.jsx';

export class Home extends React.Component{
    render(){
        return(
            <div>
                <main role="main" style={{backgroundColor: "white"}}>
                    <Context.Consumer>
                        {
                            ({store}) => {
                                return <OurCarousel items={
                                                store.posts.slice(0,3).map((item, index) => {
                                                    return (
                                                        {
                                                            src: item.image,
                                                            title: item.title,
                                                            content: item.content
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
                                            store.posts.slice(3,6).map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <Card thumbnail={item.thumbnail}
                                                              title={item.title}
                                                              content={item.content}
                                                              link={"/post/" + (index + 3)}
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
                                                                        <button className="btn btn-primary"
                                                                                onClick={() => actions.addProductToCart(item)}>Add to Cart</button>
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
