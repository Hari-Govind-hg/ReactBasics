import React from "react";
function FormComponent(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="age"
          value={props.data.age}
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="isVegetarian"
          checked={props.data.isVegetarian}
          onChange={props.handleChange}
        />
        Vegetarian
        <br />
        <input
          type="checkbox"
          name="isKosher"
          checked={props.data.isKosher}
          onChange={props.handleChange}
        />
        Kosher
        <br />
        <input
          type="checkbox"
          name="isLactoseIntolerant"
          checked={props.data.isLactoseIntolerant}
          onChange={props.handleChange}
        />
        Lactose Free
        <br />
        <br />
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
        />
        Female
        <br />
        <select
          value={props.data.destination}
          onChange={props.handleChange}
          name="destination"
        >
          <option value=" ">----Please Choose an Option----</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Kochi">Kochi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
        <h1>
          {props.data.firstName} {props.data.lastName} {props.data.age}{" "}
          {props.data.destination} {props.data.gender}
        </h1>
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default FormComponent;
