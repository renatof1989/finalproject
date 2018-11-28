 import React, {Component} from "react";
 import '../../styles/footer.css';
 
 export default class Footer extends Component{
    render(){
        return( <div>
            <footer className="container border-top p-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-8 font">© 2018 Company, Inc. · <a href="#ppage">Privacy</a> · <a href="#termspage">Terms</a></div>
                        <div className="col-4 font"><a href="#top">Back to Top</a></div>
                    </div>
                </div>
            </footer>
        </div>);}}
