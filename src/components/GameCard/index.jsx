import React, { Component } from "react";
import "./style.css";

class GameCard extends Component {
  state = {};

  render() {
    return (
      // <div className="container">
      <div className="card float-left">
        <div className="img-container ">
          <img alt={this.props.name} src={this.props.image} data-id={this.props.id} onClick={() => this.props.userClick(this.props.id)} />
        </div>
      </div>
      // </div>
    );
  }
}

export default GameCard;
