import React from 'react';
import PropTypes from 'prop-types';
import {Context} from '../store/appContext.jsx';

export class Single extends React.Component{
    
    render(){
       
        return(
            <Context.Consumer>
                {
                ({store}) =>{
                    return <h1>This will show the demo element: {store.demo[this.props.match.params.theid].title}</h1>;
                }    
                }
            </Context.Consumer>);
    }
}

Single.propTypes = {
    match: PropTypes.object
};