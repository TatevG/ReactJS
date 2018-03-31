import React from 'react';
import RepoList from './repoList';
import '../stylesheets/repos.css';
import loadingGif from '../images/repoLoading.gif';
import _ from 'lodash';



class Repos extends React.PureComponent{
    constructor() {
        super();
        this.state = {
            repos: [],
            loading: true
        };
    }
    async componentDidMount (){   
        try {
            const res = await fetch(this.props.reposUrl);
            const repos = await res.json();
            this.setState({ repos, allRepos: [...repos], loading: false });
        }
        catch (e) {
        }
    }

    search = event => {
        const text = event.target.value;
        const filtered = _.filter(this.state.allRepos, (repo) => {
            return repo.name.toLowerCase().includes(text.toLowerCase());
        });
        this.setState({ repos: filtered });
    }
    render() {
        const { repos, loading } = this.state;
        return (
            <div className="repos">
                <div className="repo1"></div>
                <div className="repo2">
                    <input onChange={this.search} placeholder="Search" />
                    {
                        loading ? <img src={loadingGif} alt="" /> :
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