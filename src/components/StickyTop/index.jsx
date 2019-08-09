import React from "react";
import "./style.css";

function StickyTop(props) {
  return (
    <div className="d-flex justify-content-around">
      <div className="p-3">
        <h1 style={{ fontWeight: 1000 }}>Clicky Game</h1>
      </div>
      <div className="p-3 ">
        <h1>You guessed incorrectly!</h1>
      </div>
      <div className="p-3 ">
        <h1>Score: {props.score} | Top Score: 12</h1>
      </div>
    </div>
  );
}

export default StickyTop;
