import React from "react";
import FormComponent from "./FormComponent";
//Container/Component Architecture
class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      age: "",
      isVegetarian: false,
      isKosher: false,
      isLactoseIntolerant: false,
      destination: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(event) {
    return alert(
      this.state.firstName + " " + this.state.lastName + " " + this.state.gender
    );
  }

  render() {
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}
export default FormContainer;
