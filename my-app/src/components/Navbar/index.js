import React from "react"


function Navbar(props){
  return( 
   <nav className="navbar navbar-dark bg-primary sticky-top">
          <a className="navbar-brand" href="https://shreyaasumann.github.io/Clicky-Game/">American Dad Game</a>
          <h3>{props.message}</h3>
          <h3>Your Score: {props.score}</h3>
          <h3>High Score: {props.highScore}</h3>

  </nav>)
}

export default Navbar;
