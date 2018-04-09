import React from 'react';
import '../styles/result.css';

const Result = ({ items, changeHandler, doubleClick}) => {
    return (
      <p className="result">
        {items && items.map((item, index) => 
          <li key={index} name={index} id={index} onDoubleClick={doubleClick} onChange={changeHandler}>{item}
          <input  id={index} value = {index} type="checkbox" />
        </li>) }   
    </p>
  );
};

export default Result;
