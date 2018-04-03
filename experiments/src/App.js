import React, { Component } from 'react';
import Article from './components/article';
import Input from './components/input';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      typed: ''
    };
  }


  inputChangeHandler = e => {
    this.setState({typed: e.target.value});
  }

  render() {
    return (
      <div className="App">
      <p>To Do List</p>
        <Article 
          text="Hello"
          author="TatevG"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."
        />
        <p>Hello "name"</p>
        <Input 
         changeHandler={this.inputChangeHandler}
          />
         <p>Hello, {(this.state.typed) ? this.state.typed : "Stranger..."}</p>
      </div>
    );
  }
}

export default App;