import React, { Component } from 'react';
import Data from './components/data';
import Inputs from './components/inputs';
import Loading from './components/loading';
import loadingGif from './images/loading.gif';

const URL = 'https://api.github.com/users/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      userName: ''
    };
  }
  changeHandler = event => {
    this.setState({ userName: event.target.value });
  }
  clickHandler = async () => {
    this.setState({ loading: true });
    const { userName } = this.state;
    let user = null;
    try {
      const res = await fetch(`${URL}${userName}`);

      if (res.status !== 200) {
        this.setState({ user: 'not found', loading: false });
        return;
      }

      user = await res.json();
    }
    catch (e) { }
    this.setState({ user, loading: false });
  }
  render() {
    const { user, loading } = this.state;
    if (loading) {
      return (
        <div className="App">
          <Loading {...{ loadingGif }} />
        </div>
      );
    }
    return (
      <div className="App">
        <Inputs
          changeHandler={this.changeHandler}
          clickHandler={this.clickHandler}
        />
        <Data {...{ user }} />
      </div>
    );
  }
}

export default App;