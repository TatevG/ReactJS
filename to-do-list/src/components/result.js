import React from 'react';
import '../styles/result.css';

const Result = ({ items }) => {
    return (
      <p className="result">
        { items && items.map((item, index) => <li key={index}>{item}</li>) }
    </p>
  );
};

export default Result;
