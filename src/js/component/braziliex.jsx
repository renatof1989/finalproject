import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Braziliex (props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.braziliex.map((item, index) => {
                             
                              return (<div>
                              <h>Braziliex</h>
                              <h2 key={index}>{item.last}</h2>
                              </div>);
                            
                            })
                        );
                  }
                     }

                
            </Context.Consumer>
    );
}

Braziliex.propTypes = {
    items: PropTypes.array
};

export default Store(Braziliex)