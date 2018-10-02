import React, {Component} from "react";
import '../../styles/login.css';

export class Login extends Component{
    
    render(){
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
                                
                                {/* <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div> */}

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                                                
                            
                            
                            
                            {/* <form className="form-signin">
                                <h2 className="form-signin-heading">Please sign in</h2>
                                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            </form> */}



                        </div>
                    </div>
                </div>
            </div>
        );
    }
}