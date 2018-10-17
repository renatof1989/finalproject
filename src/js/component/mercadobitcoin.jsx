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
                             
                              return (<div>
                              <h>Mercado Bitoin</h>
                              <h2 key={index}>{item.ticker.last}</h2>
                              <a href="">Continue Reading</a>
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