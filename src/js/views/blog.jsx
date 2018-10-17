import React from 'react';

import Gemini from '../component/gemini.jsx';
import Coinbase from '../component/coinbase.jsx';
import Mercadobitcoin from '../component/mercadobitcoin.jsx';
import Featuredpost from '../component/featuredpost.jsx';
import Negociecoins from '../component/negociecoins.jsx';
import Bitcambio from '../component/bitcambio.jsx';
import Braziliex from '../component/braziliex.jsx';
//import Featurecard from '../component/featurecard.jsx';

export class Blog extends React.Component{
  render(){
    return(
        <div className="container">
          <div className="row">

            <h1 className="col-12">Coin Compare Project</h1>
            <div className="row">
                <div className="col-6"><h1>United States</h1>
                  <Gemini/>
                  <Coinbase/>
                </div>
                <div className="col-6"><h1>Brazil</h1>
                  <Mercadobitcoin/>
                  <Negociecoins/>
                  <Bitcambio/>
                  <Braziliex/>
                </div>
            </div>
                <div>
                </div>
                </div>
 

          <div className="row">
              <Featuredpost />
          </div>    
           
            
            </div>


      
     
      );
      
  }
  
}