import React, { Component, PureComponent} from 'react';
import Article from './components/article';
import Input from './components/input';
import Result from './components/result';
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: [],
      choosen:[]
    };
  }

  inputChangeHandler = e => {
    this.setState({term: e.target.value});
  }

clickHandler = e => {
  const {term, items} = this.state;
  if(term !== ''){
    items.push(term);
  }

  this.setState({ items, choosen: items});
}
search = e => {
const {term, items} = this.state;
  const text = e.target.value;
  const filtered = _.filter(items, (todo) => {
      return todo.toLowerCase().includes(text.toLowerCase());
    });
    this.setState({ choosen: filtered });
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
      <Result items={this.state.choosen} />
        <input className ="search" type="text" onChange={this.search} placeholder="Search" />
      </div>
    );
  }
}

export default App;
