import React from 'react';

const Inputs = ({changeHandler, clickHandler}) => (
  <div>
    <input type="text" onChange = {changeHandler} />
    <button onClick = {clickHandler}>Search</button>
  </div>
);

export default Inputs;


// export default
// class Inputs extends React.Component {
//   render(){
//     return(
//       <div>
//         <input type="text" onChange={this.props.changeHandler} />
//         <button onClick={this.props.clickHandler}>Search</button>
//       </div>
//     );
//   }
// }