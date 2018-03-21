import React, { Component, PureComponent } from 'react';
import P from './components/pureComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      a: 1
    };
  }
  change = () => {
    const state = {...this.state};
    state.a++;

    this.setState(state);
  }
  render() {
    return (
      <div className="App">
        <P
          r={this.state.a}
          change={this.change}
        />
      </div>
    );
  }
}

export default App;
