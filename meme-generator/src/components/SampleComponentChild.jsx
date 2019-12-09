import React from "react";

function changer() {}

class SampleComponentChild extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.value.name}</h1>
        <h1>{this.props.value.age}</h1>
        <button
          onClick={() => {
            this.props.value.age = this.props.value.age + 1;
            this.props.value2 = this.props.value2 + 1;
            console.log(this.props.value.age);
            console.log(this.props.value2);
          }}
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default SampleComponentChild;
