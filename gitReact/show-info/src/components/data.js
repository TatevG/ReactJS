import React from 'react';
import Info from './info';

import '../stylesheets/data.css';

const Data = ({ user }) => {
    if (!user) return null;
    else if (user === 'not found')
        return (
            <div className="info">
                <span className="user-not-found">USER NOT FOUND</span>
            </div>
        );

    const { id, login, avatar_url } = user;
    return (
            <Info {...{ id, login, avatar_url }} />
    );
};

export default Data;