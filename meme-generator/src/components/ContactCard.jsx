import React from "react";

function ContactCard(props) {
  return (
    <React.Fragment>
      <div className="card">
        <h1>{props.contact.name}</h1>
        <p>{props.contact.detail}</p>
      </div>
    </React.Fragment>
  );
}

export default ContactCard;
