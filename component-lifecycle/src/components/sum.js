import React from 'react';

export default
class Sum extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    console.log('constructor');
  }
  componentWillReceiveProps(nextProps){
    console.log(this.props);
    console.log(nextProps);
  }
  shouldComponentUpdate(nextProps){
    return false;
    return (nextProps.x + nextProps.y >= 1.5);
  }
  componentWillMount(){
    console.log('cwm');
  }
  componentDidMount(){
    console.log('cdm');
  }
  render(){
    console.log('render');
    const {x, y} = this.props;
    /*
    const x = this.props.x;
    const y = this.props.y;
    */
    return (
      <p>{Number(x)+Number(y)}</p>
    )
  }
}