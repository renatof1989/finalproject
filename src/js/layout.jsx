import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from './component/functional/scrollToTop.jsx';
import Home from './views/home.jsx';
import Cryptomap from './views/cryptomap.jsx';
import Login from './views/login.jsx';
import {UserInfo} from './views/userInfo.jsx';
import Store from './store/appContext.jsx';
import Navbar from './views/navbar.jsx';
import Footer from "./views/footer.jsx";
import MyAccount from "./views/account.jsx";

export class Layout extends React.Component{
    
    render(){
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/cryptomap" component={Cryptomap} />
                        <Route path="/login" component={Login} />
                        <Route path="/userinfo" component={UserInfo} />
                        <Route path="/account" component={MyAccount} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default Store(Layout);
