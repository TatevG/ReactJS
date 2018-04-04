import React from 'react';

const Result = ({ items }) => {
    return (
      <ul className="result">
        { items && items.map((item, index) => <li key={index}>{item}</li>) }
    </ul>
  );
};

export default Result;
