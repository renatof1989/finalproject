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
                user:  {name: "Joe Shmo",
                email: 'JoeShmoCodes2@gmail.com'
                }
            }
            
        },
        actions: {
            findCountryData: (countryName) => {
                switch(countryName) {
                    case "United States":
                        let gemini = scope.state.store.gemini.length > 0 ? "Gemini: $"+scope.state.store.gemini["0"].ask+" " : "";
                        let coinbase = scope.state.store.coinbase.length > 0 ? "Coinbase: $"+scope.state.store.coinbase["0"].ask+" " : "";
                        return coinbase + gemini;
                    case "Brazil":
                        //Mercado Bitcoin Information
                        let mercadobitcoinlast = scope.state.store.mercadobitcoin.length > 0 ? "MercadoBitcoin: R$"+scope.state.store.mercadobitcoin["0"].ticker.last+"" : " ";
                        //Negocie Coin Information
                        let negociecoinslast = scope.state.store.negociecoins.length > 0 ? " Negocie Coins: R$"+scope.state.store.negociecoins["0"].last+"" : " ";
                        //Bitcambio Information
                        let bitcambiolast = scope.state.store.bitcambio.length > 0 ? "BitCambio R$"+scope.state.store.bitcambio["0"].last+"" : " ";
                        
                        return mercadobitcoinlast + negociecoinslast + bitcambiolast;
                       
                        //case "Germany" || "France":
                        /*case "Canada":
                        case "Mexico":
                        case "Guatemala":
                        case "El Salvador":
                        case "Belize":
                        case "Honduras":
                        case "Nicaragua":
                        case "Costa Rica":
                        case "Panama":
                        case "Colombia":
                        case "Ecuador":
                        case "Venezuela":
                        case "Guyana":
                        case "Suriname":
                        case "France":
                        case "Peru":
                        case "Bolivia":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":
                        case "Brazil":*/
                            
                    default:
                        return " ";
                }
                
                /*return scope.state.store.gemini.length > 0 ? scope.state.store.gemini["0"].ask+"" : " no data";/*.map((item, index) => {
                  return item.ask;
                })[0];*/
            },
            
            
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

