import React from "react";
import "./style.css";

function Jumbotron (){
return (
    <div className="jumbotron jumbotron-fluid mb-0">
  <div className="container">
    <h1 className="display-4">American Dad Game</h1>
    <p className="lead">Character cards will randomly change position when clicked. Click each card once. Remember the cards that have already been clicked. If you click a card more than once then you lose.</p>
  </div>
</div>
);

}

export default Jumbotron;