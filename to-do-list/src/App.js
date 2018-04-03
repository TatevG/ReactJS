import React, { Component } from 'react';
import Article from './components/article';
import Input from './components/input';
import Result from './components/result';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  inputChangeHandler = e => {
    this.setState({term: e.target.value});
  }

clickHandler = e => {
  const {term, items } = this.state;
  if(term !== ''){
    items.push(term);
  }
  
  this.setState({ items });
}
  render() {
    return (
      <div className="App">
        <p>To Do List</p>
        <Article 
          heading="Heading"
          author="Tatevik"
        />
        <Input 
          changeHandler={this.inputChangeHandler}
          clickHandler={this.clickHandler}
        />
        <Result items={this.state.items} />
      </div>
    );
  }
}

export default App;
