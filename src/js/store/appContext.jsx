import React from 'react';
import getState from './store.js';

export const Context = React.createContext(null);

const Store = (PassedComponent) =>{
    class StoreWrapper extends React.Component{
        constructor(){
            super();
            this.state = getState(this);
        }
        
        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent />
                </Context.Provider>
                );
        }
    }
    return StoreWrapper;
};

export default Store;