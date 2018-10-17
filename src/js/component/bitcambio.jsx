import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Bitcambio (props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.bitcambio.map((item, index) => {
                             
                              return (<div>
                              <h>Bitcambio</h>
                              <h2 key={index}>{item.last}</h2>
                              </div>);
                            
                            })
                        );
                  }
                     }

                
            </Context.Consumer>
    );
}

Bitcambio.propTypes = {
    items: PropTypes.array
};

export default Store(Bitcambio)