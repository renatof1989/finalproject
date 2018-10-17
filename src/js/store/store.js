const getState = (scope) => {
    return {
        store: {
            gemini:[],
            
            coinbase:[],
            
            mercadobitcoin:[],
            
            negociecoins:[],
            
            bitcambio:[],
            
            braziliex:[],
            
            posts:[],
            
            products:[],
        
            session:{
                username:'Rigo',
                email: 'rigocodes@gmail.com',
                loggedIn: false,
                user:  {firstname:"Rigo",
                 lastname:"Fuentes",
                 address:"1234 American Way Miami, Fl. 33126"
                }
            },
            
            cart:[],
            
            demo:[
                {
                    title:"FIRST",
                    background: "red"
                },
                {
                    title:"SECOND",
                    background: "blue"
                }
            ]
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
                if (user.username === store.session.username && user.email === store.session.email){
                    store.session.loggedIn = true;
                    scope.setState({store});
                    return true;
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

