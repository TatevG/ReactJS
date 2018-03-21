import React, { Component } from 'react';
import Sum from './components/sum';
// import Gh from './components/gh';

class App extends Component {
  constructor(){
    super();
    this.state = {
      x: 0,
      y: 5,
      s: 'a'
    };

    setInterval(()=>{
      this.setState({x: Math.random(), y: Math.random()});
    }, 1000);
  }

  render() {
    // const s = this.state.s;
    const {x, y} = this.state;
    return (
      <div className="App">
        <Sum x={x} y={y} />
        {/* <p>{s}</p> */}
        {/* <Gh /> */}
      </div>
    );
  }
}

export default App;
