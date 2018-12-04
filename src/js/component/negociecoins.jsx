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
                                  <p><strong>Negocie Coins</strong></p>
                                  <p>R${item.last}</p>
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

export default Store(Negociecoins);