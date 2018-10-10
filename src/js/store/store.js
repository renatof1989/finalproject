const getState = (scope) => {
    return {
        store: {
            posts:[],
            
            products:[],
        
            session:{
                username:'Rigo',
                email: 'rigocodes@gmail.com',
                loggedIn: false
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

