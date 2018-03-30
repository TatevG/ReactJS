import React from 'react';
import RepoList from './repoList';
import '../stylesheets/repos.css';


class Repos extends React.PureComponent{
    constructor() {
        super();
        this.state = {
            repos: [],
        };
    }
    async componentDidMount (){
        try {
            const res = await fetch(this.props.reposUrl);
            const repos = await res.json();
            this.setState({repos});
        }
        catch (e) {
         }
    }

    render() {
        const {repos } = this.state;
        return (
            <div className="repos">
                <div className="repo1"></div>
                <div className="repo2">{
                    repos.map(repo => (
                        <RepoList {...{ key: repo.name, repo, userName: this.props.userName }} />
                    ))
                    }</div>
                <div className="repo3"></div>
            </div>            
        );
    }
}
export default Repos