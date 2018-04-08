import React from 'react';
import '../styles/result.css';

const Result = ({ items, changeHandler}) => {
    return (
      <p className="result">
        {items && items.map((item, index) => <li key={index}>{item}<input type="checkbox" onChange = { changeHandler }/></li>) }   
    </p>
  );
};

export default Result;
