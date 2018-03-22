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


  inputChangeHandler = e => {
    this.setState({[e.target.id]: e.target.value});
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Input
          changeHandler={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default App;
