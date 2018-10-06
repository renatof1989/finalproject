import React, {Component} from "react";
import {Context} from '../store/appContext.jsx';
import { Link } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                        <a className="navbar-brand" href="/">Carousel</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/">
                                        <button type="button" className="btn btn-dark">Home</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blog">
                                        <button type="button" className="btn btn-dark">Blog</button>
                                    </Link>                             
                                </li>
                                <li className="nav-item">
                                    <Link to="/product">
                                        <button type="button" className="btn btn-dark">Product</button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/checkout">
                                        <button type="button" className="btn btn-dark">Checkout</button>
                                    </Link>                            
                                </li>
                                <li className="nav-item">
                                    <Link to="/login">
                                        <button type="button" className="btn btn-success">Login</button>
                                    </Link>                            
                                </li>
                            </ul>

                            <form className="form-inline my-2 my-lg-0">
                                <Context.Consumer>
                                    {
                                        ({store}) => {
                                               if (store.session.loggedIn){
                                                return (
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item"><a className="nav-link" href = "">Hello {store.session.username}! </a></li>
                                                    </ul>
                                                    );
                                            }
                                        }
                                    }
                                </Context.Consumer>
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;
