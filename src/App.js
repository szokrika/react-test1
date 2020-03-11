import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    //test
    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {show ? <span>show</span> : <span>hide</span>}
        <button onClick={this.toggle}>toggle</button>
      </div>
    );
  }
}

export default App;
