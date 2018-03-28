import React from 'react';
import '../stylesheets/info.css';

const Info = ({ login, id, avatar_url }) => (
    <div className="info">
        <section><img className="img" src={avatar_url} alt="avatar" /></section>
            <section><span className="login">{login}</span></section>
            <section><span className="id">{id}</span></section>
    </div>
);

export default Info;