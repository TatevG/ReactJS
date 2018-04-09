import React from 'react';
import '../styles/input.css'

const Input = ({ changeHandler, clickHandler }) => (
  <div>
    <textarea className="term" type="text" onChange={changeHandler} />
    <button className="btn" onClick={clickHandler}>Add</button>
  </div>
);

export default Input;