import React, { Component } from "react";
import StickyTop from "./components/StickyTop/index";
import Jumbotron from "./components/Jumbotron/index";
import GameCard from "./components/GameCard/index";
import chars from "./chars.json";
import Footer from "./components/Footer/index";

class App extends Component {
  state = {
    chars,
    score: 0,
    topScore: 0,
    userPick: [],
    guessedMessage: "Click an image to begin!"
  };

  handleClickScore = id => {
    const newUserPick = [...this.state.userPick];
    newUserPick.push(id);

    this.state.chars.sort(function(a, b) {
      return 0.5 - Math.random();
    });

    if (this.state.userPick.indexOf(id) === -1) {
      this.setState({
        score: this.state.score + 1,
        topScore: Math.max(this.state.score + 1, this.state.topScore),
        userPick: newUserPick,
        guessedMessage: "You guessed Correctly!"
      });
    } else {
      this.setState({
        score: 0,
        userPick: [],
        guessedMessage: "You guessed Incorrectly!"
      });
    }
  };

  render() {
    return (
      <div>
        <StickyTop score={this.state.score} guessedMessage={this.state.guessedMessage} topScore={this.state.topScore} />
        <Jumbotron />
        <div className="container">
          {this.state.chars.map(char => (
            <GameCard name={char.name} image={char.image} key={char.id} id={char.id} userClick={this.handleClickScore} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
