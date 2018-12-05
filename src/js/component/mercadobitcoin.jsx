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
                                  <a href="https://www.mercadobitcoin.com"><strong>Mercado Bitcoin</strong></a>
                                  <p>R${item.ticker.last}</p>
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
export default Store(Mercadobitcoin);