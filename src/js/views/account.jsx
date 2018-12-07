import React from 'react';
import {Context} from '../store/appContext.jsx';

export class MyAccount extends React.Component{
  render(){
    return(
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <h1>Hiding Under the NAV BAR</h1>
                </div>
                <h2> My Account</h2>
            </div>
            <div className=" p-5">
                <Context.Consumer>
                    {
                        ({store}) => {
                           if (store.session.loggedIn){
                            return (<React.Fragment>
                                <div class= "pic6 container container-fluid">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Profile Picture"/>
                                        <div class="card-body">
                                            <ul className= "list-group">
                                                <li className="list-group-item">Hello <strong>{store.session.username}</strong>!</li>
                                                <li className="list-group-item"><strong>Name:</strong><br/>{store.session.user.name}</li>
                                                <li className="list-group-item"><strong>Email:</strong><br/>{store.session.user.email}</li>
                                            </ul>
                                        </div>
                                    </div>
                                
                                    <div className="form-group container">
                                        <p className="badge badge-info bam">Exchanges to Watch</p>
                                        <div className="card">
                                            <div className="custom-control custom-checkbox mb-3 list-group-item">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                <label className="custom-control-label" for="customCheck1">CoinBase</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3 list-group-item">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                <label className="custom-control-label" for="customCheck2">Gemini</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3 list-group-item">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                                <label className="custom-control-label" for="customCheck3">Mercado Bitcoin</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3 list-group-item">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                                <label className="custom-control-label" for="customCheck4">Negocie Coins</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3 list-group-item">
                                                <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                                <label className="custom-control-label" for="customCheck5">BitCambio</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3 list-group-item">
                                                <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                                <label className="custom-control-label" for="customCheck6">Bitstamp</label>
                                            </div>
                                        </div>
                                    </div>
                                    <input className="btn btn-primary" type="submit" value="Update"/> 
                                </div>
                            </React.Fragment>
                                );
                        }
                    }
                }
                </Context.Consumer>           
                {/* <User data = {this.state[0]} */}
       
            </div>            
        </div>
        
        );
      }
}

export default MyAccount;