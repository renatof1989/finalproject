import React from 'react';
import PropTypes from 'prop-types';
import Store,{Context} from '../store/appContext.jsx';


function Braziliex (props){
    return(

        <Context.Consumer>
            {
                  ({store}) => {
                        return(
                            store.braziliex.map((item, index) => {
                              return (<div key={index}>
                                  <p><strong>Braziliex</strong></p>
                                  <p>R${item.last}</p>
                                  <p>{item.percentChange}</p>
                              </div>);
                            })
                        );
                  }
                     }
        </Context.Consumer>
    );
}
Braziliex.propTypes = {
    items: PropTypes.array
};

export default Store(Braziliex);