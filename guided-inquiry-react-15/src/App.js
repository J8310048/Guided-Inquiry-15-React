import React, { Component } from "react";
import BasicInfo from "./BasicInfo";
("use client");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Clark Kent",
          occupation: "Superman",
          height: "6'3",
          dateOfBirth: "January 1, 1938",
        },
        {
          name: "Bruce Wayne",
          occupation: "Batman",
          height: "6'3",
          dateOfBirth: "January 1, 1939",
        },
        {
          name: "Barry Allen",
          occupation: "The Flash",
          height: "6'0",
          dateOfBirth: "January 1, 1939",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Joshua</h1>
        <p>December 15th, 1997</p>
        <p>Height: 5'8"</p>
        <p>Hispanic</p>
        <p>loves to play video games</p>
        <p>practices the guitar sometimes</p>
        <div>
          {this.state.people.map((person, index) => (
            <BasicInfo key={index} person={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
