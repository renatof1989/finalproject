import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function TitleList(props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.posts.map((item, index) => {
                              if (index<=1) {
                              return (<div className="col-6">
                              <div className="row-2">
                              <div className="col-12">
                              <div className="card">
                           <div class="d-flex align-items-start">
                              <div className="card-body">
                            <p className="text-primary">{item.tags}</p>
                              <h2 key={index}>{item.title}</h2>
                                    <p> {item.date}</p>
                                    <p className= "card-text"></p>
                                    <p>{item.content.substring(0,150)}</p>  
                                    <p className= "card-link"></p>
                                    <a href="">Contunie Reading</a>
                                    <link>{item.link}</link>
                                    
                                    <div className="col-3">
                                    <ul className="thumbnails"></ul>
                                        <img src="http://placehold.it/200x300" alt="200x300"/>
                                   </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                               </div>);
                              } else {
                                  return null ;
                              }
                            })
                        );
                     }
                }
            </Context.Consumer>


    );
}

TitleList.propTypes = {
    items: PropTypes.array
    

};

export default Store(TitleList);




 

              