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
    userPick: []
  };

  handleClickScore = id => {
    this.setState({ score: this.state.score + 1, userPick: id });
    console.log(this.state.userPick);
  };

  render() {
    return (
      <div>
        <StickyTop score={this.state.score} />
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
