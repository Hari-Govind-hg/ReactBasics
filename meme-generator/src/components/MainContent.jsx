import React from "react";

import TodoItem from "./TodoItem";

function MainContent() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfTheDay;

  if (hours < 12) {
    timeOfTheDay = "morning";
  } else if (hours >= 12 && hours < 18) {
    timeOfTheDay = "afternoon";
  } else {
    timeOfTheDay = "night";
  }

  return (
    <span>
      <h1 style={{ color: "#FF8C00" }}>Good {timeOfTheDay}!</h1>
      <TodoItem />
    </span>
  );
}

export default MainContent;
