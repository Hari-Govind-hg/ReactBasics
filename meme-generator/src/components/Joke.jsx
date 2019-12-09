import React from "react";

function Joke(props) {
  return (
    <React.Fragment>
      <h1 style={{ display: props.joke.question ? "block" : "none" }}>
        Question: {props.joke.question}
      </h1>
      <h1 style={{ color: !props.joke.question && "blue" }}>
        Punchline: {props.joke.punchline}
      </h1>
    </React.Fragment>
  );
}

export default Joke;
