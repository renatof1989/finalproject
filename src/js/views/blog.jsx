import React from 'react';

import Jumbotron from '../component/jumbotronblog.jsx';
import Featuredpost from '../component/featuredpost.jsx';
import BlogPost from '../component/blogpost.jsx';
//import Featurecard from '../component/featurecard.jsx';

export class Blog extends React.Component{
  render(){
    return(
        <div className="container-fluid">
          <div className="row-justify-content-center">
            <div className="col-12">
              <div className="jumbotron">
                <Jumbotron/>
              </div>
            </div>
          </div>
          <div className="row">
              <Featuredpost />
          </div>    
            <div className="row">
              <div className="col-8">
                 <h1>Latest Tea from FIRE ISLAND</h1>
              </div>
                <div className="col-8">
                  <BlogPost />
                </div>
                <div className="col-4">Test 1</div>
                <div className="divider"></div>
            </div>
            </div>


      
     
      );
      
  }
  
}