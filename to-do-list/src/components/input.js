import React from 'react';
import '../styles/input.css'

const Input = ({ changeHandler, clickHandler }) => (
  <div className="inputs">
    <input className="term" type="text" placeholder="To do task" onChange={changeHandler} />
    <button className="btn" onClick={clickHandler}>Add</button>
  </div>
);

export default Input;