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
<<<<<<< HEAD
                          if (index<1) {return (
                              <div>
                                  <h2 key={index}>{item.title}</h2>
                                  <p key={index}>{item.date} by {item.author}</p>
                                  <li key={index}>{item.content}</li>
                                  <div key={index} alt="" href={item.image}></div></div>);
=======
                        if (index<1) {
                        return (
                            <div>
                                <h2 key={index}>{item.title}</h2>
                                <p key={index}>{item.date} by {item.author}</p>
                                <li key={index}>{item.content}</li>
                                <div key={index} alt="" href={item.image}></div>
                            </div>);
>>>>>>> 1c19241c76c4a22c05ab56e000e7042b662ce70f
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