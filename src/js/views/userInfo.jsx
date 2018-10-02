import React, {Component} from "react";


// Local Imports
import NavBar from "./navbar";
import Footer from "./footer";


export class UserInfo extends Component{

    render(){
        return(

            <div className=" p-5">
                <NavBar />

                {/* <User data = {this.state[0]} */}
                <Footer />
            </div>
        );
    }
}