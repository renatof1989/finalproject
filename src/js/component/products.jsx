import React from 'react';

function Products () {
   return (
        <div className="cards bg-dark text-white xs-col-12 col-6 m-1 text-center">
           <h2 className="pt-5">Another headline</h2>
           <p1 className="pb-4">And an even wittier subheading</p1>
           <div id="product1" className="align-content-end card bg-white col-9 mx-auto">
               <button id="purchase" type="button" className="btn btn-dark btn-lg">Add to cart</button>
           </div>
       </div>

   );
}

export default Products;