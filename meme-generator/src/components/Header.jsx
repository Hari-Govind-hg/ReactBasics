/* eslint-disable no-unused-vars */
import React from "react";
import "./styling.css";

function Header() {
  return (
    <React.Fragment>
      <img
        className="meme-logo"
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <h3>Meme Generator</h3>
    </React.Fragment>
  );
}

export default Header;
