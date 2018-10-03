import React, {Component} from "react";
import '../../styles/login.css';
// import Store, {Context} from '../store/appContext.jsx';


export class Login extends Component{
    
    render(){
            //  const loger = {
            //      user : "",
            //      pswd : ""
            //  };

        return(
            <div className="mainer p-5">
                <div className="row justify-content-center mt-5">

                    <div className="bg-light p-5 col-6 rounded">
                        <div className="container ">
                            
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">User Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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