import React from "react";

function Clicker(props) {
  const logValue = props.isLoggedIn ? "Log Out" : "Log In";
  return (
    <React.Fragment>
      <button onClick={props.logger}>{logValue}</button>
    </React.Fragment>
  );
}

export default Clicker;
