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
                    
                    <Random />
                    <Footer />
                </main>
            </div>
        );
    }
}
