import React from 'react';
import PropTypes from 'prop-types';
import {Context} from '../store/appContext.jsx';

export class Post extends React.Component{
    
    render(){
       
        return(
            <Context.Consumer>
                {
                ({store}) =>{
                    return <div><h1>: {store.posts[this.props.match.params.theid].title}</h1>
                    <p>{store.posts[this.props.match.params.theid].date}</p>
                    <p>{store.posts[this.props.match.params.theid].author}</p>
                    <p1>{store.posts[this.props.match.params.theid].content}</p1></div>;
                }    
                }
            </Context.Consumer>);
    }
}

Post.propTypes = {
    match: PropTypes.object
};