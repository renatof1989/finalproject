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
                             
                              return (<div key={index}>
                              <h2>Bitcambio</h2>
                              <h2>{item.last}</h2>
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