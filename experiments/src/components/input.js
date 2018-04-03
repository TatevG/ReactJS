import React from 'react';

export default
class Input extends React.Component {
  render(){
    return (
        <div>
            <input id="typed" type="text" onChange = {this.props.changeHandler}/>
        </div>
    );
  }
}