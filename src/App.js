import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/5ucz-vwe8.json&$$app_token=yS0vUdeTk57XnkVJDjMTMWQgd"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data
        });
        console.log(this.state.data);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Yeoooooo. This project is under development. Please stand by.. Glooks
        </h1>
      </div>
    );
  }
}

export default App;
