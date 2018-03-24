import React from 'react';
import '../stylesheets/info.css';

const Info = ({ user }) => (
    <div class="info">
        <section>{user ? <img src={`https://avatars2.githubusercontent.com/u/${user.id}?v=4`} alt="user Avatar" /> : <p></p>}</section>
        <section>{user ? <p><b>Login:</b> {JSON.stringify(user.login)}<hr /></p> : <p></p>}</section>
        <section> {user ? <p><b>ID:</b> {JSON.stringify(user.id)}<hr /></p> : <p></p>}</section>
    </div>
);

export default Info;
