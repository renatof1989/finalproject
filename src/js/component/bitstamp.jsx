import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Bitstamp (props){
    return(

        <Context.Consumer>
            {
                 ({store}) => {
                        return(
                            store.bitstamp.map((item, index) => {
                             
                              return (<div key={index}>
                                  <a href="https://www.bitstamp.net"><strong>Bitstamp</strong></a>
                                  <p>€{item.last}</p>
                              </div>);
                            })
                        );
                  }
                     }
        </Context.Consumer>
    );
}

Bitstamp.propTypes = {
    items: PropTypes.array
};

export default Store(Bitstamp);