import React from 'react';
import Mercadobitcoin from '../component/mercadobitcoin.jsx';
import UsaExchange from '../component/usaexchange.jsx';
import Bitcambio from '../component/bitcambio.jsx';
import Braziliex from '../component/braziliex.jsx';
import Negociecoins from '../component/negociecoins.jsx';
import EuroExchange from '../component/euroexchange.jsx';
import BasicMap from "../component/tooltip.jsx";
import '../../styles/cryptomap.css';

export class Cryptomap extends React.Component{
  render(){
    return(
        <div className="container">
            <BasicMap />
            <div className="row crypto">
                <h1 className="col-12">Coin Compare Project</h1>
                <div className="row">
                    <div className="col-4"><h1>United States</h1>
                        <UsaExchange/>
                    </div>
                    <div className="col-4">
                        <h1>Brazil</h1>
                        <Mercadobitcoin/>
                        <Negociecoins/>
                        <Bitcambio/>
                        <Braziliex/>
                    </div>
                    <div className="col-4">
                        <h1>Europe</h1>
                        <EuroExchange />
                    </div>
                </div>
            </div>
            <div className="row">
            </div>    
        </div>
      );
  }
}

export default Cryptomap;