import React from 'react';

const Data = ({user}) =>(
  <div>
    {user ? JSON.stringify(user) : <p>Enter a username</p>}
  </div>
)
export default Data
