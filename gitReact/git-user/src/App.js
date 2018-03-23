import React from 'react';
import Input from './components/input';
import Data from './components/data';

const URL = 'https://api.github.com/users/';

class App extends React.Component {
constructor(){
  super();
this.state = {
  user: null,
  userName: ''
};
}

changeHandler = event =>{
  this.setState({userName: event.target.value});
}

clickHandler = async () =>{
  const {userName} = this.state;
  let user = null;
  try{
    const result = await fetch(`${URL}${userName}`);
    user = await  result.json();
  }
  catch(e){
    this.setState({user});
  }
}

render(){
  const {user} = this.state;
  return (
        <div className="App">
          <Input
            changeHandler={this.changeHandler}
            clickHandler={this.clickHandler}
          />
        <Data {... {user}} />
      </div>
  );
  }
}

export default App;
