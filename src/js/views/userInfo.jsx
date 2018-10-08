import React, {Component} from "react";
import {Context} from '../store/appContext.jsx';


// Local Imports


export class UserInfo extends Component{

    render(){
        return(

            <div className=" p-5">
                <Context.Consumer>
                    {
                        ({store}) => {
                           if (store.session.loggedIn){
                            return (
                                <ul>
                                    <li>Hello {store.session.username}!</li>
                                    <li>{store.session.user.firstname}</li>
                                    <li>{store.session.user.lastname}</li>
                                    <li>{store.session.user.address}</li>
                                </ul>
                                );
                        }
                    }
                }
                </Context.Consumer>           
                {/* <User data = {this.state[0]} */}
       
            </div>
        );
    }
}