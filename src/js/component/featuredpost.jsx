import React from 'react';

export default class Featurepost extends React.Component {
    render(){
      return (
          <div className="card">
          <img className="card-img-right" src="https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547" alt="Card cap"></img>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a className="btn btn-primary">Go somewhere</a>
  </div>
</div>

      );
    }
}