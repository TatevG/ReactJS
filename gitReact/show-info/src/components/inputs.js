import React from 'react';
import '../stylesheets/input.css'


const Inputs = ({changeHandler, clickHandler}) => (
  <div class="searchbox">
    <input type="text" onChange={changeHandler} />
    <button onClick={clickHandler}>Search</button>
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