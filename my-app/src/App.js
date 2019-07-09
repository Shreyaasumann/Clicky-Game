import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends React.Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clickedArray: [],
    message: ""
  };

  ClickedCharacter = id => {
      const shuffledArray = this.shuffleArray(friends);
      this.setState({friends: shuffledArray});

      if (this.state.clickedArray.includes(id)) {
        this.setState({ score: 0, clickedArray: [], message: "Game Over try again!"});
      }
      else {
        this.setState({
          clickedArray: this.state.clickedArray.concat([id]),
          score: this.state.score + 1,
          message: "Correct"
        });
      }
      
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
  }
  
  shuffleArray = (imagesArray) => {
    for (let i = imagesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
    }
    return imagesArray;
}


  
  render(){
    return (
      <div>
        <Navbar message={this.state.message} highScore={this.state.highScore} score={this.state.score}/>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <Jumbotron/>

        <Wrapper>
          {
            friends.map(friend => {
              return <FriendCard
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
                clickedCharacter={this.clickedCharacter}
              />
            })

          }
        
        </Wrapper>
      </div>
    );
  }
}


    
export default App;
