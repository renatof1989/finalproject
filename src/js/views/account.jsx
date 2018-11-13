import React from 'react';
import {Context} from '../store/appContext.jsx';

export class MyAccount extends React.Component{
  render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Hiding Under the NAV BAR</h1>
                </div>
                <div>My Account</div>
            </div>
            <div className=" p-5">
                <Context.Consumer>
                    {
                        ({store}) => {
                           if (store.session.loggedIn){
                            return (
                                <ul>
                                    <li>Hello {store.session.username}!</li>
                                    <li>{store.session.user.name}</li>
                                    <li>{store.session.user.email}</li>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect2">Select which exchanges to receive notifications for:</label>
                                        <select multiple class="form-control" id="exampleFormControlSelect2">
                                            <option>Exchange 1</option>
                                            <option>Exchange 2</option>
                                            <option>Exchange 3</option>
                                            <option>Exchange 4</option>
                                            <option>Exchange 5</option>
                                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                                        </select>
                                        <label for="formGroupExampleInput">When price drops below:</label>
                                        <input type="" class="form-control" id="formGroupExampleInput" placeholder="Notify me when lower than this number"/>
                                        <label for="formGroupExampleInput2">When price rises above:</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Notify me when higher than this number"/>    
                                    </div>                                    
                                </ul>
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