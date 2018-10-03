import React, {Component} from "react";
import '../../styles/login.css';
// import {handleSubmit} from "./../component/login.jsx";


export class Login extends Component{
    constructor(){
        super();
        this.state = {
            user : "",
            pswd : ""
        };
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleRequest(event){
        event.preventDefault();

        const state = this.state;
        state.user = this.nameTextInput.value;
        state.pswd = this.pswdTextInput.value;
        this.setState(
            { 
                state
            }
        );

        console.log(state);
    }
    
    render(){
             
        return(
            <div className="mainer p-5">
                <div className="row justify-content-center mt-5">

                    <div className="bg-light p-5 col-6 rounded">
                        <div className="container ">
                            
                            <form onSubmit = {this.handleRequest}  >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">User Name</label>
                                    <input type="userName" ref={(ref) => this.nameTextInput = ref} className="form-control" placeholder="Enter username" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" ref={(ref) => this.pswdTextInput = ref} className="form-control" placeholder="Password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}