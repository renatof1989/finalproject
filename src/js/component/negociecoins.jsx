import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';

function Negociecoins(props){
    return(

            <Context.Consumer>

                
                {
                  ({store}) => {
                        return(
                            store.negociecoins.map((item, index) => {
                              return (<div key={index}>
                              <h2>Negocie Coins</h2>
                              <h2>{item.last}</h2>
                              </div>);
                            })
                        );
                  }
                     }

                
            </Context.Consumer>
    );
}

Store.propTypes = {
    items: PropTypes.array
};

export default Store(Negociecoins)