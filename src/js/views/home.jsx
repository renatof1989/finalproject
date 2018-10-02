import React from "react";

// Local Imports
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";

//import {OurCarousel} from "../component/home/carousel.jsx";
//import {Card} from "../component/home/card.jsx";
import {Random} from "../component/home/random.jsx";

export class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                
                <main role="main" style={{backgroundColor: "white", marginTop: "56px"}}>
                    <h1 className="text-center pt-4">Carousel in progress</h1>
                    <Random />
                    <Footer />
                </main>
            </div>
        );
    }
}
