import React from 'react';
import Gemini from '../component/gemini.jsx';
import Coinbase from '../component/coinbase.jsx';

export class UsaExchange extends React.Component{
  render(){
    return(
        <div className="container">
          <div className="row">
                <div className="col-6">
                    <Gemini/>
                    <Coinbase/>
                </div>
            </div>
        </div>
        );
      }
}

export default UsaExchange;