import React from "react";
import "./style.css";

function StickyTop(props) {
  return (
    <div className="d-flex justify-content-around fixed-top">
      <div className="p-3">
        <h1 style={{ fontWeight: 1000 }}>Clicky Game</h1>
      </div>
      <div className="p-3 ">
        <h1>{props.guessedMessage}</h1>
      </div>
      <div className="p-3 ">
        <h1>
          Score: {props.score} | Top Score: {props.topScore}
        </h1>
      </div>
    </div>
  );
}

export default StickyTop;
