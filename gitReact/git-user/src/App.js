import React from 'react';
import Input from './components/input';
import Data from './components/data';

class App extends React.Component {

  inputChangeHandler = e => {
    this.setState({ [e.target]: e.target.value });
    
  }
// async change () {
//   const state = this.state;
//   try {
//     const url = 'https://api.github.com/users/' + state;
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//   }
//   catch (e) {
//     console.log(e);
//   }
//   return result;
//   }

  render() {
    console.log(this.state);
    // console.log(change());
    return (
      <div className="App">
        <Input
          changeHandler={this.inputChangeHandler}
          clickHandler={this.change}
        />
        <Data 
          
        />
      </div>
    );
  }
}

export default App;
