import React from "react";
// import handleChange from "../App";

function TodoItem(props) {
  const complete = {
    fontStyle: "italic",
    color: "Grey",
    textDecoration: "line-through"
  };
  return (
    <React.Fragment>
      <h4 style={props.todoDetail.completed ? complete : null}>
        {props.todoDetail.text}
      </h4>
      <input
        type="checkbox"
        onChange={event => props.handleChange(props.todoDetail.id)}
        checked={props.todoDetail.completed}
      />
    </React.Fragment>
  );
}

export default TodoItem;
