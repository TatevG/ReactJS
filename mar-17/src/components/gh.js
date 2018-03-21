import React from 'react';
import loading from '../images/loading.gif';

export default
class Gh extends React.Component {
  constructor(){
    super();
    console.log('constructor');
    this.state = {
      user: null
    };
  }
  async componentDidMount(){
    console.log('cdm');
    let user;
    try {
      const result = await fetch('https://api.github.com/users/narghev');
      user = await result.json();
    }
    catch(e){
      user = null;
    }
    
    this.setState({user});
  }
  shouldComponentUpdate(nextProps, nextState){
    return !(nextState.user.login === 'narghev');
  }
  componentWillUpdate(){
    console.log('cwu');
  }
  componentDidUpdate(){
    console.log('cdu');
  }
  componentWillMount(){
    console.log('cwm');
  }
  render(){
    console.log('render');
    const content = !this.state.user ?
      <img alt="" src={loading}/> : <p>{this.state.user.id}</p>
    return(
      <div>
        {content}
      </div>
    );
  }
}