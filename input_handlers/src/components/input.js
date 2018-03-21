import React from 'react';

export default
class A extends React.Component {
  render(){
    return(
      <div>
        <input id="inp1" type="text" onChange={this.props.changeHandler}/>
        <input id="inp2" type="text" onChange={this.props.changeHandler}/>
      </div> 
    );
  }
}