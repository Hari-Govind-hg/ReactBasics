import React from "react";

function Product(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h3>Age:{props.age}</h3>
      <h3>Job:{props.job}</h3>
    </React.Fragment>
  );
}

export default Product;
