import React, { Component } from 'react';
import {Root, A, B, AB} from '.components/route.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={() => <Root text="a" />} />
            <Route  path="/a" component= {A}/>
            <Route path="/b" component= {B}/>
            <Route path = "/a/b" component ={AB} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;