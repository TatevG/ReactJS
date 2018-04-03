import React from 'react';

export default
class Article extends React.Component {
  render(){
    return (
        <div>
            <h1>{this.props.text}</h1>
            <h4>Author: {this.props.author}</h4>
            <p>{this.props.body}</p>
        </div>
    );
  }
}