import React from 'react';
import Input from './components/input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  async handleSubmit(event) {
    let msg = "";
    try {
      const url = 'https://api.github.com/users/' + event.target.value;
      const response = await fetch(url);
      const user = await response.json();
      if (user.message === "Not Found") {
        msg = user.message;
      } else {
        let output = "";
        for (const property in user) {
          output += property + ': ' + user[property] + '<br>';
        }
        msg = output;
      }
    }
    catch (e) {
      console.log(e);
    }
    console.log(msg)
  }

  render() {
    return (
      <div>
        <Input 
        onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
export default App