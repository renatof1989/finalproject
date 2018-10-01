import React from "react";

function Banner () {
   return (
       <div className="jumbotron jumbotron-fluid text-center mt-1">
           <div className="container">
               <h1 className="display-4">Punny headline</h1>
               <p className="lead"> And an even wittier subheading to boot. 
               Jumpstart <br /> your marketing efforts with this example based on 
               Apple’s marketing <br /> pages. </p>
               <button type="button" className="btn btn-outline-dark">Coming soon</button>
           </div>
       </div>

   );
}

export default Banner;

