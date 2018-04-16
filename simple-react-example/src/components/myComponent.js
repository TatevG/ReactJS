import React from 'react';

export default
class MyComponent extends React.Component {
  render(){
    const {text} = this.props;
    // const text = this.props.text;
    return (
      <h1>{text}</h1>
    );
  }
}