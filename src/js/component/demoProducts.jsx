import React from 'react';
import Store,{Context} from '../store/appContext.jsx';

function DemoProducts(props){
    
    return(
        <ul>
            <Context.Consumer>
                {({store, actions}) => {
                return(
                    <div className="container">
                        <ul>
                            {
                            store.products.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => {actions.addProductToCart(item);}}>
                                        {item.name}
                                    </li>
                                );
                            })
                            }
                        </ul>
                        <ul>
                            {
                            store.cart.map((item, index) => {
                                return (<li key={index}>{item.name}</li>);
                            })
                            }
                        </ul>
                    </div>
                    );
                }}
            </Context.Consumer>
        </ul>
    );
};

export default Store(DemoProducts);