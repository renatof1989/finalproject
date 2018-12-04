import React from "react";
import '../../styles/home.css';



export class Home extends React.Component{
    render(){
        return(
            <div class="pic2">
                <div className="row hidden">
                    <div className="col-12">
                        <h1>Hiding Under the NAV BAR</h1>
                    </div>
                
                
                    <div class="jumbotron">
                        <div class= "container-fluid">
                            <h1 class="display-4">Welcome to BitCoinage Check!</h1>
                            <p class="lead intro">This website is for educational purposes only. It is intended on providing information as we are not an exchange or sell any coins or tokens of any kind. This website is intended to make it easy to check pricing across multiple global exchanges and currencies.</p>
                            <hr class="my-4"/>
                            <p>Please feel free to donate to BitCoin Wallet address: <strong>1J4rLxX2N3EgieuwCfw15HDoM95gdg33o4</strong></p>
                            <a class="btn btn-primary btn-lg" href="/cryptomap" role="button">Learn more</a>
                        </div>  
                    </div>
                </div>
            </div> 
        );
    }
}

export default Home;
