import React from 'react';
import getState from './store.js';

export const Context = React.createContext(null);

const Store = (PassedComponent) =>{
    class StoreWrapper extends React.Component{
        constructor(props){
            super(props);
            this.state = getState(this);
        }
        
        componentDidMount() {
            
            fetch('https://random-scripts-nachovz.c9users.io/collaborative-react-backend/products.json')
              .then(response => response.json())
              .then(data => {
                  let {store} = this.state;
                  store.products = data;
                  this.setState({store});
              })
              .catch(error => console.log(error));
              
            fetch('https://random-scripts-nachovz.c9users.io/collaborative-react-backend/posts.json')
            .then(response => {response.json();})
            .then(iguana => { 
              let {store} = this.state;
              store.posts = iguana;
              this.setState({store});
            })
            .catch(error => console.log(error));
        
        
            fetch('https://random-scripts-nachovz.c9users.io/collaborative-react-backend/cart.json')
            .then(random => {random.json();})
            .then(iguana => { 
              let {store} = this.state;
              store.cart = iguana;
              this.setState({store});
            })
            .catch(error => console.log(error));
        }
        
        render(){
            return(
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
                );
        }
    }
    
    return StoreWrapper;
};

export default Store;