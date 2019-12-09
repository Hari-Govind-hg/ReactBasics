import React from "react";
import styling from "./styling.css";

function Footer() {
  const copyright = "Copyright";
  const name = "Hari";

  return (
    <footer className="bar">
      <span>{`${copyright} ${name}`}&copy;</span>
    </footer>
  );
}

export default Footer;
