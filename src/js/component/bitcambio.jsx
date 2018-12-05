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
                                  <a href="https://bitcambio.com"><strong>Bitcambio</strong></a>
                                  <p>R${item.last}</p>
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

export default Store(Bitcambio);