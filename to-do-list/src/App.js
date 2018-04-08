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
      choosen:[],
      done:[]
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
moveUp = e =>{
  const {items, done} = this.state;
  const status = e.target.checked;
  const selected = _.
  this.setState({ done: items, items });
}

search = e => {
const {term, items} = this.state;
  const text = e.target.value;
  const filtered = _.filter(items, (todo) => {
      return todo.toLowerCase().includes(text.toLowerCase());
    });
    this.setState({ choosen: filtered });
};

  reverse = () => {
    const { items } = this.state;
    const reversedArray = items.reverse();
    this.setState({ items: reversedArray });
  };

  render() {
    return (
      <div className="App">
        <Article
          heading="To Do List"
          author="Tatevik"
        />
        <Input
          changeHandler={this.inputChangeHandler}
          clickHandler={this.clickHandler}
        />
        <input className="search" type="text" onChange={this.search} placeholder="Search" />
        <button className="reserve" onClick={this.reverse}>Reverse it!</button>
        <Result items={this.state.choosen} changeHandler = {this.moveUp} />      
      </div>
    );
  }
}

export default App;
