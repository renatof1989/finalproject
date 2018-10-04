import React from 'react';
import PropTypes from 'prop-types';


Featurecard.propTypes = {
    Blog: PropTypes.string
};

function Featurecard(){
    return(
       <div className="card">
        <div className="card-body">
          <h5 class= "card-title"> Card titlE></h5>
          <p class= "card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.></p>
              <img class="card-img" src="..." alt="Card image cap"/>
        </div>
       </div>
        
  );
}
export default Featurecard; 
 