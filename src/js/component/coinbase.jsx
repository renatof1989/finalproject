import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Coinbase(props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.coinbase.map((item, index) => {
                             
                              return (<div key={index}>
                              <h2>Coinbase</h2>
                              <h2>{item.price}</h2>
                              </div>);
                            
                            })
                        );
                  }
                     }

                
            </Context.Consumer>
    );
}

Coinbase.propTypes = {
    items: PropTypes.array
};

export default Store(Coinbase)