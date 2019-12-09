import React from "react";
import "./styling.css";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      memeImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const url = "https://api.imgflip.com/get_memes";
    fetch(url)
      .then(response => response.json())
      .then(resp => {
        this.setState({
          allMemeImgs: resp.data.memes
        });
        // console.log(this.state.allMemeImgs);
      });
  }

  handleChange(event) {
    console.log("Working");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const genImg = parseInt(Math.random() * this.state.allMemeImgs.length);
    console.log(this.state.allMemeImgs[genImg].url);
    this.setState({
      memeImg: this.state.allMemeImgs[genImg].url
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Enter Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Enter Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div>
          <img className="meme-img" src={this.state.memeImg} alt="" />
          <h1 className="top-text">{this.state.topText}</h1>
          <h1 className="bottom-text">{this.state.bottomText}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default MemeGenerator;
