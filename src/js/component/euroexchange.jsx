import React from 'react';
import Bitstamp from '../component/bitstamp.jsx';

export class EuroExchange extends React.Component{
  render(){
    return(
        <div className="container">
          <div className="row">
                <div className="col-6">
                    <Bitstamp />
                </div>
            </div>
        </div>
        );
      }
}

export default EuroExchange;