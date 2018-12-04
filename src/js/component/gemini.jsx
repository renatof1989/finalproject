import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Gemini(props){
    return(

        <Context.Consumer>
            {
                  ({store}) => {
                        return(
                            store.gemini.map((item, index) => {
                             
                              return (<div key={index}>
                                  <p><strong>Gemini</strong></p>
                                  <p>${item.last}</p>
                              </div>);
                            })
                        );
                  }
                     }

                
        </Context.Consumer>
    );
}

Gemini.propTypes = {
    items: PropTypes.array
};

export default Store(Gemini);