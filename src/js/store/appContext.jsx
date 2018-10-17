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
              
            fetch('https://random-scripts-nachovz.c9users.io/collaborative-react-backend/post.json')
            .then(response => response.json())
            .then(iguana => { 
              let {store} = this.state;
              store.posts = iguana;
              this.setState({store});
              console.log(iguana)
            })
            .catch(error => console.log(error));
        
        
            fetch('https://random-scripts-nachovz.c9users.io/collaborative-react-backend/cart.json')
            .then(random => random.json())
            .then(iguana => { 
              let {store} = this.state;
              store.cart = iguana;
              this.setState({store});
            })
            .catch(error => console.log(error));

            fetch('https://api.gemini.com/v1/pubticker/btcusd')
            .then(random => random.json())
            .then(iguana => { 
              let {store} = this.state;
              store.gemini.push(iguana);
              this.setState({store});
            })
            .catch(error => console.log(error));

            fetch('https://api.pro.coinbase.com/products/btc-usd/ticker')
            .then(random => random.json())
            .then(apple => { 
              let {store} = this.state;
              store.coinbase.push(apple);
              this.setState({store});
            })
            .catch(error => console.log(error));

            fetch('https://broker.negociecoins.com.br/api/v3/btcbrl/ticker')
            .then(random => random.json())
            .then(apple => { 
              let {store} = this.state;
              store.negociecoins.push(apple);
              this.setState({store});
            })
            .catch(error => console.log(error));            

            fetch('https://braziliex.com/api/v1/public/ticker/btc_brl')
            .then(random => random.json())
            .then(apple => { 
              let {store} = this.state;
              store.braziliex.push(apple);
              this.setState({store});
            })
            .catch(error => console.log(error));                 

            fetch('https://bitcambio_api.blinktrade.com/api/v1/BRL/ticker')
            .then(random => random.json())
            .then(apple => { 
              let {store} = this.state;
              store.bitcambio.push(apple);
              this.setState({store});
            })
            .catch(error => console.log(error));


            fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
            .then(random => random.json())
            .then(apple => { 
              let {store} = this.state;
              store.mercadobitcoin.push(apple);
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