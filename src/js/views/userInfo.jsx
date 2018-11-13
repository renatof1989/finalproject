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
                                    <li>{store.session.user.name}</li>
                                    <li>{store.session.user.email}</li>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect2">Example multiple select</label>
                                        <select multiple class="form-control" id="exampleFormControlSelect2">
                                            <option>Exchange 1</option>
                                            <option>Exchange 2</option>
                                            <option>Exchange 3</option>
                                            <option>Exchange 4</option>
                                            <option>Exchange 5</option>
                                        </select>
                                    </div>                                    
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