import React from "react";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";

export class Home extends React.Component{
    render(){
        return(<div>
            <h1> This home is now clear </h1>
            <NavBar />
            <Footer />

            <Card image="..." header="Header" text="Eat My Shorts"/>
        </div>);
    }
}

class Card extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            image: props.img,
            header: props.head,
            body: props.text
        };
    }
    
    render() {
        return (
            <div className="card col-lg-4">
                <img className="card-img-top" src={this.state.image} />
                <div className="card-body">
                    <h2>{this.state.header}</h2>
                    <p>{this.state.body}</p>
                </div>
                <a className="btn btn-secondary" href="/blog" role="button">View Details</a>
            </div>
        );
    }
}