import React from 'react';

import Jumbotron from '../component/jumbotronblog.jsx';
import Featuredpost from '../component/featuredpost.jsx';
import BlogPost from '../component/blogpost.jsx';
//import Featurecard from '../component/featurecard.jsx';

export class Blog extends React.Component{
  render(){
    return(
        <div className="container">
          <div className="row-justify-content-center ">
            <div className="col-12">
              <div className="jumbotron bg-dark text-white">
                <Jumbotron/>
              </div>
            </div>
          </div>
          <div className="row">
              <Featuredpost />
          </div>    
            <div className="row">
              <div className="col-8">
                 <h1>From the Firehouse</h1>
              <div className="divider"></div>
                <div className="row">
                  <BlogPost />
                </div>
                <div className="col-4">Test 1</div>
                <div className="divider"></div>
            </div>
            </div>
            </div>


      
     
      );
      
  }
  
}