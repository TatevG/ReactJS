import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Form from './components/form';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
