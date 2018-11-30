import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Mercadobitcoin (props){
    return(

            <Context.Consumer>
                {
                  ({store}) => {
                        return(
                            store.mercadobitcoin.map((item, index) => {
                             
                              return (<div key={index}>
                              <h2>Mercado Bitoin</h2>
                              <h2>{item.ticker.last}</h2>
                              </div>);
                            
                            })
                        );
                  }
                     }

                
            </Context.Consumer>
    );
}

Mercadobitcoin.propTypes = {
    items: PropTypes.array
};

export default Store(Mercadobitcoin)