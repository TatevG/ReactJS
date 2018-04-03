import React from 'react';

const Result = ({ items }) => (
    <ul>
        { items && items.map((item, index) => <li key={index}>{item}</li>) }
    </ul>
);

export default Result;
