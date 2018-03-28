import React from 'react';
import '../stylesheets/info.css';

const Info = ({ login, id, avatar_url}) => (
    <div className="info">
        <section><img className="img" src={avatar_url} alt="avatar" /></section>
        <section><span className="login"><b>Login:</b>{login}</span></section>
        <section><span className="id"><b>ID:</b>{id}</span></section>
        {/* <section><a onClick={showRepos}>Show Repos</a></section> */}
    </div>
);

export default Info;