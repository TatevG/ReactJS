import React from 'react';

export default
class P extends React.PureComponent {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.r}</h1>
        <input
          type='button'
          onClick={this.props.change}
          value='Click'
        />
      </div>
    );
  }
}