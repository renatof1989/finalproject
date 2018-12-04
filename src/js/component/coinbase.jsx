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
                                  <p><strong>Coinbase</strong></p>
                                  <p>${item.price}</p>
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

export default Store(Coinbase);