import React from 'react';
import '../styles/result.css'; 
import { DragSource } from 'react-dnd';


const Result = ({ items, done, changeHandlerUp, changeHandlerDown, doubleClick}) => {
    return (
      <p className="result">
        {done && done.map((item, index) =>
          <li className="done" key={index} id={index} name={index} onDoubleClick={doubleClick} onChange={changeHandlerDown}>{item}
            <input id={index} value={item} type="checkbox" />
          </li>)} 
        {items && items.map((item, index) => 
          <li className="items" key={index} id={index} name={index} onDoubleClick={doubleClick} onChange={changeHandlerUp}>{item}
            <input id={index} value={item} type="checkbox" />
        </li>) }    
    </p>
  );
};

export default Result;
