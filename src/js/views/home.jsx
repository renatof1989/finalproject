import React from "react";
import '../../styles/home.css';



export class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="row hidden">
                    <div className="col-12">
                        <h1>Hiding Under the NAV BAR</h1>
                    </div>
                </div>            
                <main role="main" className="pic2">
                    <div className="container mb-3">
                        <div className="row pt-5 intro"><strong>Welcome to BitCoinage Check! This website is for educational purposes only. It is intended on prodviding information. We are not an exchange or sell any coins or tokens of any kind. The website is intended to make it easy to check pricing across multiple global exchanges and currencies. Please feel feel to donate to BitCoin Wallet address njdsnsjkffbvsjvbfhdbdshbfh .</strong></div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
