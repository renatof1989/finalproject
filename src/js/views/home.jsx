import React from "react";
import NavBar from "./navbar.jsx";
import Footer from "./footer.jsx";

import {Card} from "../component/home/card.jsx";

export class Home extends React.Component{
    render(){
        return(<div>
            <NavBar />
            <Footer />

            <Card image="..." header="Header" text="Eat My Shorts"/>
        </div>);
    }
}