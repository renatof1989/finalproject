import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from './views/home.jsx';
import {Product} from './views/product.jsx';
import {Blog} from './views/blog.jsx';
import {Post} from './views/post.jsx';
import {Checkout} from './views/checkout.jsx';
import {Login} from './views/login.jsx';
import {UserInfo} from "./views/userInfo.jsx";
import {Demo} from './views/demo.jsx';

import {Context} from './store/appContext.jsx';

//create your first component
export class Layout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Context.Provider>
                            <Route exact path="/" component={Home} />
                            <Route path="/product" component={Product} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/post" component={Post} />
                            <Route path="/checkout" component={Checkout} />
                            <Route path="/login" component={Login} />
                            <Route path="/demo" component={Demo} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Context.Provider>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
