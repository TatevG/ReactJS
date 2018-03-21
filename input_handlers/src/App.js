import React, { Component } from 'react';
import Input from './components/input';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inp1: '',
      inp2: ''
    };
  }

  inputChangeHandler1 = e => {
    this.setState({inp1: e.target.value});
  }

  inputChangeHandler2 = e => {
    this.setState({inp2: e.target.value});
  }

  inputChangeHandler = e => {
    this.setState({[e.target.id]: e.target.value});
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Input
          changeHandler1={this.inputChangeHandler1}
          changeHandler2={this.inputChangeHandler2}
          changeHandler={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default App;
