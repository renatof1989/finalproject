import React from 'react';

import PropTypes from 'prop-types';

  Products.propTypes = {
    backgroundColor: PropTypes.string,
    productColor: PropTypes.string,
    price: PropTypes.number,
    fontColor: PropTypes.string,
    productDescription: PropTypes.string
};
    

function Products (props) {
    
   return (
        <div className={`cards bg-${props.backgroundColor} text-${props.fontColor} col-xs-12 col-lg-6 text-center`}>
           <h2 className={`pt-5 text-${props.fontColor}`}>{`Product ${props.productColor}`}</h2>
           <p className={`pb-4 text-${props.fontColor}`}>{props.productDescription}</p>
           <h3 className="mb-1">{`$${props.price}`}</h3> 
           <div id="product1" className={`card bg-${props.productColor}  col-9`}>
               <button id="purchase" type="button" className={`btn btn-${props.fontColor} text-${props.backgroundColor} pb-2 btn-lg border-${props.backgroundColor}`}>Add to cart</button>
           </div>
       </div>

   );
}

export default Products;