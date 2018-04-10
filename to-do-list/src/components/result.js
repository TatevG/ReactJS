import React from 'react';
import '../styles/result.css';

const Result = ({ items, done, changeHandlerUp, changeHandlerDown, doubleClick}) => {
    return (
      <p className="result">
        {items && items.map((item, index) => 
          <li key={index} name={index} id={index}  onDoubleClick={doubleClick} onChange={changeHandlerUp}>{item}
            <input id={index} value={item} type="checkbox" />
        </li>) }
        {done && done.map((item, index) =>
          <li key={index} name={index} id={index} onDoubleClick={doubleClick} onChange={changeHandlerDown}>{item}
            <input id={index} value={item} type="checkbox" />
          </li>)}     
    </p>
  );
};

export default Result;
