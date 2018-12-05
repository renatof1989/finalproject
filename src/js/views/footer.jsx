 import React, {Component} from "react";
 import '../../styles/footer.css';
 
 export default class Footer extends Component{
    render(){
        return( <div>
            <footer className="container border-top p-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-3 font">© 2018 Company, Inc. · <a href="#ppage">Privacy</a> · <a href="#termspage">Terms</a></div>
                        <div className="col-3 font"><a href="#top">Back to Top</a></div>
                        <div className="col-3"><a href="https://edge.app/bitcoin-wallet/">Get a free wallet HERE!</a></div>    
                        <div className="col-3"><img style= {{width: 100, height: 50}} src="https://unhashed.com/wp-content/uploads/2018/03/Edge-Wallet-Review.png"/></div>
                    </div>
                </div>
            </footer>
        </div>);}}
