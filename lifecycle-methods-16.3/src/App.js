import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      seconds: 0
    };
  }

  componentDidMount = () => {
    this.timer = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  componentWillUnmount = () =>  {
    clearInterval(this.timer);
  }

  render(){
    console.log(this.state);
    return (
      <div className="App">
        <p>Past {this.state.seconds} seconds</p>
      </div>
    );
  }
}
export default App;
