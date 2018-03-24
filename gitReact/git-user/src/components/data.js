import React from 'react';

const Data = ({user}) =>  (
  <div>
    {user ? JSON.stringify(user) : <p>Enter a user name</p>}
  </div>
);

export default Data;
