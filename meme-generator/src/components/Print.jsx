import React from "react";

function Print(props) {
  return (
    <React.Fragment>
      <img src={props.imgUrl + "/50/50"} alt=""></img>
      <h4 style={{ display: props.user.name ? "block" : "none" }}>
        Name:{props.user.name}
      </h4>
      <h4 style={{ display: props.user.name ? "block" : "none" }}>
        Full Name:{props.user.full_name}
      </h4>
      <h4 style={{ display: props.user.name ? "block" : "none" }}>
        Followers:{props.user.owner.followers_url}
      </h4>
      <hr style={{ display: props.user.name ? "block" : "none" }}></hr>
    </React.Fragment>
  );
}

export default Print;
