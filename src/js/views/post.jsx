import React from 'react';
import PropTypes from 'prop-types';
import {Context} from '../store/appContext.jsx';

import '../../styles/blog.css';

function Post(props){
    return(

        <Context.Consumer>
            {
              ({store}) => {
                    return(
                        store.posts.map((item, index) => {
                          if (index<1) {return (
                              <div>
                                  <h2 key={index}>{item.title}</h2>
                                  <p key={index}>{item.date} by {item.author}</p>
                                  <li key={index}>{item.content}</li>
                                  <div key={index} alt="" href={item.image}></div></div>);
                        } return null })
                    );
                 }
            }
        </Context.Consumer>
    );
}

Post.propTypes = {
    items: PropTypes.array
};

export default Post;