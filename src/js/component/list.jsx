import React from "react";
import Item from "../component/item.jsx";
import Store,{Context} from '../store/appContext.jsx';


function List(){
    
    return(
        <Context.Consumer>
                {
                     ({store}) => {
                        console.log(store);
                        return(
                            store.cart.map((item, index) => {
                              return (<Item  name = {item.name}/> );
                            })
                        );
                     }
                }
        </Context.Consumer>
        );
}
export default Store(List);