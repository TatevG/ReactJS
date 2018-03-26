import React from 'react';
import '../stylesheets/input.css';

const Inputs = ({changeHandler, clickHandler}) => (
  <div class="searchbox">
    <input type="text" placeholder = "Type GitHub Username here" onChange={changeHandler} />
    <button onClick={clickHandler}>Search</button>
  </div>
);

export default Inputs;