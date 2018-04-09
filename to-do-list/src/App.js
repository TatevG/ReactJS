import React, { Component } from 'react';
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
  const {items} = this.state;
  const status = e.target.checked;
  const elem = e.target.id;
  const to = 0;
  const arrayMove = (items, elem, to) => {
    let element = items[elem];
    items.splice(elem, 1);
    items.splice(to, 0, element);
    return items;
  }
  this.setState({done: items });
}

search = e => {
const {items} = this.state;
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
  deleteItem = e =>{
    const {items} = this.state;
    const indx = e.target.id;
  delete items[indx];
    this.setState({items });
  }

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
        <Result items={this.state.choosen} changeHandler={this.moveUp} doubleClick={this.deleteItem}/>         
      </div>
    );
  }
}

export default App;
