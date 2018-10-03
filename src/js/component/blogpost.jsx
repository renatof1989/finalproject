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
                              return (<div><h2 key={index}>{item.title}</h2><p key={index}>{item.date} by {item.author}</p><li key={index}>{item.content}</li></div>);
                              
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