import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Jumbotronblog(props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.posts.map((item, index) => {
                            if (index<=0) { 
                              return (<div>
                              <h2 key={index}>{item.title}</h2>
                              <p key={index}>{item.content.substring(0,400)}</p>
                              <a href="">Contunie Reading</a>
                              <link>{item.link}</link>
                              </div>);
                            } else {
                    return null;
                            }
                            })
                        );
                  }
                     }
                
            </Context.Consumer>
    );
}

Jumbotronblog.propTypes = {
    items: PropTypes.array
};

export default Store(Jumbotronblog)