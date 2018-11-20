const getState = (scope) => {
    return {
        store: {
            gemini:[],
            
            bitstamp:[],
            
            coinbase:[],
            
            mercadobitcoin:[],
            
            negociecoins:[],
            
            bitcambio:[],
            
            braziliex:[],
        
            session:{
                username:'Rigo',
                password: "password",
                loggedIn: false,
                user:  {name: "Renato Frores",
                email: 'rigocodes@gmail.com'
                }
            }
            
        },
        actions: {
            addProductToCart: (product) => {
                let usercart = scope.state.store;
                usercart.cart.push(product);
                scope.setState({usercart});
                alert("You just added " + product.name + " to the cart.");
                
            },
            
            deleteItemInCart: (product) => {
                let mistake = scope.state.store;
                mistake.cart.splice(product, 1);
                scope.setState(mistake);
            },
            
            isLegalUser: (user) => {
                
                let store = scope.state.store;
                if (user.username === store.session.username && user.password === store.session.password){
                    store.session.loggedIn = true;
                    scope.setState({store});
                    return true;
                } 
            },
            
            logOut: () => {
                
                let store = scope.state.store;
                
                if (store.session.loggedIn) {
                    store.session.loggedIn = false;
                    scope.setState({store});
                }
            },            
            
            changeColor: (element, color) => {
                let store = scope.state.store;
                store.demo[element].background = color;
                scope.setState({store});
            }
        }
    };
};

export default getState;

