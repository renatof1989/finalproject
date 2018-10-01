import React from 'react';

import Jumbotron from '../component/jumbotronblog.jsx';
import Featurepost from '../component/featuredpost.jsx';

export class Blog extends React.Component{
  render(){
    return(
        <div className="container-fluid">
          <div className="row-justify-content-center">
            <div className="col-12">
              <div className="jumbotron">
                <Jumbotron />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
            <Featurepost />
            </div>
                <div className="col-6">
                <Featurepost />
                </div>
        </div>    
            <div className="row">
              <div className="col-12">
                <div className="page-header">
                <h1>Latest Tea from FIRE ISLAND</h1>
                </div>
                    <div className="col-8">Oh gurl, what you got on</div>
                    <div className="col-4">Test 1</div>
                        <div className="divider"></div>
                         <hr className="left"/>
                         <hr className="right" />
            </div>
            </div>
            </div>

      
     
      );
      
  }
  
}