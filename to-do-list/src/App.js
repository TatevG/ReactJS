import React, { Component } from 'react';
import Article from './components/article';
import Input from './components/input';
import Result from './components/result';
import _ from 'lodash';
// import './App.scss';
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
    const { items, done } = this.state;
    const status = e.target.checked;
    const index = e.target.id;
    const val = e.target.value
    if(status){
      done.push(val);
      delete items[index];
    }
    this.setState({ done });
  }
  moveDown = e => {
    const { items, done } = this.state;
    const status = e.target.checked;
    const index = e.target.id;
    const val = e.target.value
    if (status) {
      items.push(val);
      delete done[index];
    }
    this.setState({ items });
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
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <Article className="Article"
          heading="To Do List"
          author="Tatevik"
        />
        <Input className="Input"
          changeHandler={this.inputChangeHandler}
          clickHandler={this.clickHandler}
        />
        <div className="sandr">
          <input className="search" type="text" onChange={this.search} placeholder="Search" />
          <button className="reserve" onClick={this.reverse}>Reverse it!</button>
        </div>
        <Result className="Result"
          items={this.state.choosen} 
          done = {this.state.done}
          changeHandlerUp={this.moveUp} 
          changeHandlerDown={this.moveDown} 
          doubleClick={this.deleteItem}
        />         
      </div>
    );
  }
}

export default App;
