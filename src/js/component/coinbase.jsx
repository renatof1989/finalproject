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
                             
                              return (<div>
                              <h>Coinbase</h>
                              <h2 key={index}>{item.price}</h2>
                              <a href="">Continue Reading</a>
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