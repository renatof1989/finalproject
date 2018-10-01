import React, {Component} from "react";

export default class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="fixed-bottom container border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">© 2017-2018 Company, Inc. · Privacy · Terms</div>
                            <div className="col-4">Back to Top</div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}