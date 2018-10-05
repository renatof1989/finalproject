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
                              <div className="row">
                              <div className="col-8">
                              <div className="card">
                              <div className="card-body">
                              <h5 className= "card-title"></h5>
                            <p className="text-primary">{item.tags}</p>
                              <h2 key={index}>{item.title}</h2>
                                    <p> {item.date}</p>
                                     <p className= "card-text"></p>
                                    <p>{item.content}</p>  
                                    <p className= "card-link"></p>
                                    <link>{item.link}</link></div>
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <ul className="thumbnails"></ul>
                                        <img src="http://placehold.it/200x300" alt="200x300"/> 
                                    </div>
                                    </div>
                               </div>);
                              } else {
                                  return ;
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




 

              