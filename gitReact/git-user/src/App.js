import React, { Component } from 'react';
import Data from './components/data';
import Inputs from './components/inputs';

const URL = 'https://api.github.com/users/';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      userName: ''
    };
  }
  changeHandler = event => {
    this.setState({userName: event.target.value});
  }
  clickHandler = async () => {
    const {userName} = this.state;
    let user = null;
    try {
      const res = await fetch(`${URL}${userName}`);
      user = await res.json();
    }
    catch(e){}
    this.setState({user});
  }
  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <Inputs
          changeHandler={this.changeHandler}
          clickHandler={this.clickHandler}
        />
        <Data {...{user}}/>
      </div>
    );
  }
}

export default App;
