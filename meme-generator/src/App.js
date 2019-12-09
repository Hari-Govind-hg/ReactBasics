import React from "react";

import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import ContactCard from "./components/ContactCard";
// import Joke from "./components/Joke";
// import productData from "./components/productData";
// import Product from "./components/Product";
// import todoData from "./components/todoData";
// import Footer from "./components/Footer";
import "./App.css";
// import TodoItem from "./components/TodoItem";
// import SampleComponentChild from "./components/SampleComponentChild";
// import ConditionalComponent from "./components/ConditionalComponent";
// import Clicker from "./components/Clicker";
// import FormContainer from "./components/FormContainer";
// import Print from "./components/Print";
import MemeGenerator from "./components/MemeGenerator";

// function App() {
//   // const ProductComponents = productData.map(product => (
//   //   <Product
//   //     key={product.id}
//   //     name={product.name}
//   //     age={product.age}
//   //     job={product.job}
//   //   />
//   // ));
//   const todoItemList = todoData.map(todo => (
//     <TodoItem key={todo.id} todoDetail={todo} />
//   ));

//   return (
//     <React.Fragment>
//       <Header />
//       {/* <MainContent /> */}
//       {/* <ContactCard
//         contact={{ name: "Hari", detail: "This is my attempt at React cards" }}
//       />
//       <ContactCard contact={{ name: "Aditya", detail: "Hello" }} />
//       <ContactCard contact={{ name: "Nakul", detail: "Thank You" }} />
//       <ContactCard contact={{ name: "Sruthy", detail: "How are you?" }} /> */}
//       {/* <Joke
//         joke={{
//           question: "Why is concrete bad?",
//           punchline: "Because it is CONcrete"
//         }}
//       />
//       <Joke
//         joke={{
//           question: "",
//           punchline:
//             "You cant breathe without lifting your tongue. And now I have made you do exactly what I wanted you to do"
//         }}
//       />
//       <Joke
//         joke={{
//           question: "Why is concrete bad?",
//           punchline: "Because it is CONcrete"
//         }}
//       /> */}
//       {/* {ProductComponents} */}
//       {todoItemList}
//       <Footer />
//     </React.Fragment>
//   );
// }

// =====================================================================================================================

//Class Based Components
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Hari",
//       age: 22
//     };
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h4>{this.state.name}</h4>
//         <h4>{this.state.age}</h4>
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//App and variable state
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     };
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <h4>
//           The User is currently logged {this.state.isLoggedIn ? "in" : "out"}
//         </h4>
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//App and state loading from JSON && handling event calls from child to parent
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todoItemList: todoData
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = id => {
//     this.setState(prevState => {
//       const updatedTodoItemList = prevState.todoItemList.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       });
//       return {
//         todoItemList: updatedTodoItemList
//       };
//     });
//   };

//   render() {
//     const todoItems = this.state.todoItemList.map(item => (
//       <TodoItem
//         key={item.id}
//         todoDetail={item}
//         handleChange={this.handleChange}
//       />
//     ));
//     return <React.Fragment>{todoItems}</React.Fragment>;
//   }
// }

// =====================================================================================================================

//Event Handling in React
// function handleClick() {
//   console.log("Clicked meeeee!");
// }

// function hovered() {
//   alert("Hover success!");
// }
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todoItemList: todoData.map(item => (
//         <TodoItem key={item.id} todoDetail={item} />
//       ))
//     };
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <img src="https://www.fillmurray.com/200/100" onMouseOver={hovered} />
//         <br />
//         <br />
//         <button onClick={handleClick}> Click Me! </button>
//         <br />
//         <br />
//         {this.state.todoItemList}
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//Changing States
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       blah: 2
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     console.log("Called");
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h1 style={{ color: "blue", marginLeft: 50 }}>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//         <SampleComponentChild
//           value={{ name: this.state.count, age: 22 }}
//           value2={this.state.blah}
//         />
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//Conditional Rendering using componentDidMount()
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       });
//     }, 1500);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {this.state.isLoading ? (
//           <h1>Loading.....</h1>
//         ) : (
//           <ConditionalComponent />
//         )}
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//Conditional Rendering pt2
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       unreadMessages: ["Hello", "Welcome to the page"]
//     };
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {this.state.unreadMessages.length > 0 && (
//           <h2>You have {this.state.unreadMessages.length} unread messages</h2>
//         )}
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//Conditional Rendering practice
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     };
//     this.logger = this.logger.bind(this);
//   }

//   logger() {
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       };
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h1>
//           The person is
//           {this.state.isLoggedIn ? " Logged In" : " Logged out"}
//         </h1>
//         <Clicker isLoggedIn={this.state.isLoggedIn} logger={this.logger} />
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//Fetching data from API
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false,
//       character: {}
//     };
//   }

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     fetch("https://swapi.co/api/people/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ character: data, isLoading: false });
//       });
//   }

//   render() {
//     const text = this.state.isLoading ? (
//       "Loading....."
//     ) : (
//       <h1>{this.state.character.name}</h1>
//     );
//     return <div>{text}</div>;
//   }
// }

// =====================================================================================================================

//Forms Part 1 & 2 {VERY IMPORTANT}
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: false,
//       gender: "",
//       age: "",
//       isVegetarian: false,
//       isKosher: false,
//       isLactoseIntolerant: false,
//       destination: " "
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({ [name]: checked })
//       : this.setState({ [name]: value });
//   }

//   handleSubmit(event) {
//     return alert(
//       this.state.firstName + " " + this.state.lastName + " " + this.state.gender
//     );
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="firstName"
//             value={this.state.firstName}
//             placeholder="First Name"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="lastName"
//             value={this.state.lastName}
//             placeholder="Last Name"
//             onChange={this.handleChange}
//           />
//           <br />
//           <br />
//           <input
//             type="number"
//             name="age"
//             value={this.state.age}
//             placeholder="Age"
//             onChange={this.handleChange}
//           />
//           <br />
//           <br />
//           <input
//             type="checkbox"
//             name="isVegetarian"
//             checked={this.state.isVegetarian}
//             onChange={this.handleChange}
//           />
//           Vegetarian
//           <br />
//           <input
//             type="checkbox"
//             name="isKosher"
//             checked={this.state.isKosher}
//             onChange={this.handleChange}
//           />
//           Kosher
//           <br />
//           <input
//             type="checkbox"
//             name="isLactoseIntolerant"
//             checked={this.state.isLactoseIntolerant}
//             onChange={this.handleChange}
//           />
//           Lactose Free
//           <br />
//           <br />
//           <label>Gender: </label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           />
//           Male
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           />
//           Female
//           <br />
//           <select
//             value={this.state.destination}
//             onChange={this.handleChange}
//             name="destination"
//           >
//             <option value=" ">----Please Choose an Option----</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Kochi">Kochi</option>
//             <option value="Bangalore">Bangalore</option>
//           </select>
//           <h1>
//             {this.state.firstName} {this.state.lastName} {this.state.age}{" "}
//             {this.state.destination} {this.state.gender}
//           </h1>
//           <button>Submit</button>
//         </form>
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//Containers/Component Architecture
// function App() {
//   return <FormContainer />; //Calls the FormContainer,which in turn calls the FormComponent.The FormContainer contains the Business logic of the application,and the FormComponent contains actual form view
// }

// =====================================================================================================================

//Practice App
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       details: [],
//       name: "",
//       URL: "",
//       isLoading: true
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const URL =
//       "https://api.github.com/search/repositories?q=" + this.state.name;

//     fetch(URL)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           details: data.items,
//           isLoading: false
//         });
//       });
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     const printer = this.state.details.map(u => (
//       <Print key={u.id} user={u} imgUrl={u.owner.avatar_url} />
//     ));
//     return (
//       <React.Fragment>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             name="name"
//             value={this.state.name}
//             placeholder="Enter github name"
//             onChange={this.handleChange}
//           />
//           <button>Submit</button>
//         </form>
//         {printer}
//       </React.Fragment>
//     );
//   }
// }

// =====================================================================================================================

//Actual Meme Generator App
function App() {
  return (
    <React.Fragment>
      <Header />
      <MemeGenerator />
    </React.Fragment>
  );
}
export default App;
