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
                              return (<div className="col-6"><h2 key={index}>{item.title}</h2>
                                    <p key={index}> by {item.date}></p>
                                    <p key={item.content}></p>
                                    <p key= {index}>{item.tags}></p>
                                    <li key={index}>{item.image}></li></div>);
                              } else {
                                  return "Hi";
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