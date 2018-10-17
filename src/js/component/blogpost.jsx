import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';

import '../../styles/blog.css';

function BlogPost(props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.posts.map((item, index) => {
                              return (<div>
                              <h2>{item.last}</h2>
                              </div>);
                            })
                        );
                     }
                }
            </Context.Consumer>
    );
}

BlogPost.propTypes = {
    items: PropTypes.array
};

export default Store(BlogPost);