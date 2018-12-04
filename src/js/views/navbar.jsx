import React, {Component} from "react";
import {Context} from '../store/appContext.jsx';
import { Link } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <React.Fragment>
                <div>
                
                
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/">
                                        <button type="button" className="btn btn-dark">Home</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cryptomap">
                                        <button type="button" className="btn btn-dark">Crypto Map</button>
                                    </Link>                             
                                </li>

                                
                                <Context.Consumer>
                                    {
                                        ({store, actions}) => {
                                               if (store.session.loggedIn){
                                                return (
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                            <Link to="/account">
                                                                <button type="button" className="btn btn-dark">My Account</button>
                                                            </Link>                             
                                                        </li>
                                                            
                                                    </ul>
                                                    );
                                            }
                                        }
                                    }
                                </Context.Consumer>                                
                                
                                <Context.Consumer>
                                    {
                                        ({store}) => {
                                               if (!store.session.loggedIn){
                                                return (
                                                    <ul className="navbar-nav mr-auto">
                                                        <li className="nav-item">
                                                            <Link to="/login">
                                                                <button type="button" className="btn btn-success">Login</button>
                                                            </Link>                            
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/sign_up">
                                                                <button type="button" className="btn btn-info">Sign Up</button>
                                                            </Link>                            
                                                        </li>
                                                    </ul>
                                                    );
                                            }
                                        }
                                    }
                                </Context.Consumer>
                                
                                
                                
                            </ul>

                            <form className="form-inline my-2 my-lg-0">
                                <h5 class=" btn-primary">Bitcoinage Check!</h5>
                                <Context.Consumer>
                                    {
                                        ({store, actions}) => {
                                               if (store.session.loggedIn){
                                                return (
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item">
                                                            <Link to="/userInfo" className="nav-link">
                                                        Hello {store.session.username}!</Link></li>
                                                        <li className="nav-item">
                                                            <Link to="/login">
                                                                <button type="button" onClick = {() => actions.logOut()} className="btn btn-danger">Log Out</button>
                                                            </Link>                            
                                                        </li>
                                                            
                                                    </ul>
                                                    );
                                            }
                                        }
                                    }
                                </Context.Consumer>
                            </form>
                        </div>
                    </nav>
                    
                    
                    
                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;
