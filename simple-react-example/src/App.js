import React, { Component } from 'react';
import MyComponent from './components/myComponent';

class App extends Component {
  render() {
    // return (
    //   <MyComponent text="barev" />
    // );
    return (
      <div>
        {true ? <p>true</p> : null}
      </div>
    );
  }
}

export default App;
