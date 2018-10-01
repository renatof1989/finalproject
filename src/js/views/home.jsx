import React from "react";

// Local Imports
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";

import {Carousel} from "../component/home/carousel.jsx";
//import {Card} from "../component/home/card.jsx";

export class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                {/*Please add 'id="#top"' at the top of your pages. */}
                
                <Carousel />
                <Footer />
            </div>
        );
    }
}
