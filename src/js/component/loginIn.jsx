import React, {Component} from "react";
import '../../styles/login.css';
import Store, {Context} from '../store/appContext';
// import Login from "./../views/login.jsx";


export class LogingIn extends Component{

    render(){
        console.log("we are here");
        return(
            
            <Context.Consumer>
                {
                    ({store}) => {
                        console.log("This is logged_in");
                    }
                }
            </Context.Consumer>

        );
    }
}

export default Store(LogingIn);