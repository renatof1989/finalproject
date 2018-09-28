import React from 'react';

import Jumbotron from '../component/jumbotronblog.jsx';
import Featurepost from '../component/featuredpost.jsx';

export class Blog extends React.Component{
  render(){
    return(
      <div>
        <div className="row">
        <div className="jumbotron">
        <div className="col-6">
          <Jumbotron />
          </div>
          </div>
          </div>
          <div className="row">
                  <div className="col-12">
        <div className="row">
        <div className="col-6">
            <Featurepost />
        </div>
        <div className="col-6">
            <Featurepost />
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}