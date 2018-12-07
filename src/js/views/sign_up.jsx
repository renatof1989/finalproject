import React from 'react';
import '../../styles/sign_up.css';


export class Sign_up extends React.Component{
  render(){
    return(<div className ="pic1 container-fluid">
        <main className="my-form">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className="card-body">
                                <form name="my-form" onsubmit="return validform()" action="success.php" method="">
                                    <div className="form-group row">
                                        <label for="full_name" className="col-md-4 col-form-label text-md-right">Full Name</label>
                                        <div className="col-md-6">
                                            <input type="text" id="full_name" className="form-control" name="full-name"/>
                                        </div>
                                    </div>
    
                                    <div className="form-group row">
                                        <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input type="text" id="email_address" className="form-control" name="email-address"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="user_name" className="col-md-4 col-form-label text-md-right">User Name</label>
                                        <div className="col-md-6">
                                            <input type="text" id="user_name" className="form-control" name="username"/>
                                        </div>
                                    </div>                                    
                                    <div className="form-group row">
                                        <label for="exampleInputPassword1" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 offset-md-4">
                                        <button type="submit" className="btn btn-primary">
                                            Register
                                            </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </main>
    </div>
              );
          }
        }

export default Sign_up;