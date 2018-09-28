import React from "react";
import NavBar from "./navbar.jsx";

import {Card} from "../component/home/card.jsx";

export class Home extends React.Component{
    render(){
        return(<div>
            <NavBar />

            <Card image="..." header="Header" text="Eat My Shorts"/>
        </div>);
    }
}