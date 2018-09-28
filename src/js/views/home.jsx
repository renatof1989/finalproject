import React from "react";
import NavBar from "./navbar.jsx";

import {Card} from "../component/home/card.jsx";

export class Home extends React.Component{
    render(){
        return(<div>
            <h1> This home is now clear </h1>
            <NavBar />

            <Card image="..." header="Header" text="Eat My Shorts"/>
        </div>);
    }
}