import React from 'react';
import '../stylesheets/repos.css';


const RepoList = ({ repo, userName }) => {
    const { name } = repo;
    return (
        <a className="repoList" target="blank" href={`https://github.com/${userName}/${repo.name}`}>
            <span>{name}</span>
        </a>
    );
};

export default RepoList;