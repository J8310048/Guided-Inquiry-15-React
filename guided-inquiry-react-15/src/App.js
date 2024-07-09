import React, { Component } from "react";
import BasicInfo from "./BasicInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "John Doe",
          number: "123-456-7890",
          dateOfBirth: "January 1, 1990"
        },
        {
          name: "Jane Smith",
          number: "987-654-3210",
          dateOfBirth: "February 2, 1985"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
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
      </div>
    );
  }

  render() {
    return <BasicInfo person={this.state.person} />;
  }
}

export default App;
