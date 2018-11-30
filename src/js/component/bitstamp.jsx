import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Bitstamp (props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.bitstamp.map((item, index) => {
                             
                              return (<div key={index}>
                              <h2>Bitstamp</h2>
                              test
                              <h2>{item.last}</h2>
                              </div>);
                            
                            })
                        );
                  }
                     }

                
            </Context.Consumer>
    );
}

Bitstamp.propTypes = {
    items: PropTypes.array
};

export default Store(Bitstamp);