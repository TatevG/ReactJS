import React from 'react';

const Input = ({changeHandler, clickHandler}) =>(
  <div>
    <input type="text" onChange={changeHandler} />
    <button onClick = {clickHandler}>Search</button>
  </div>
);
export default Input;







//
// export default
//     class Input extends React.Component {
//     render() {
//         return (
//             <div>
//                 <label>Git Username:
//                 <input type="text" onChange={this.props.changeHandler} />
//                 </label>
//                 <input type='button' value='Check' onClick={this.props.change} />
//             </div>
//         );
//     }
// }
