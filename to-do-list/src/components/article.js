import React from 'react';

const Article = ({ heading, author }) => (
  <div className="article">
    <h1>{heading}</h1>
    <h4>Author: {author}</h4>
  </div>
);

export default Article;