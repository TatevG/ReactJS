import React from 'react';
import RepoList from './repoList';
import '../stylesheets/repos.css';
import Loading from './loading';
import loadingGif from '../images/repoLoading.gif';


class Repos extends React.PureComponent{
    constructor() {
        super();
        this.state = {
            repos: [],
        };
    }
    async componentDidMount (){
        this.setState({ loading: true });        
        try {
            const res = await fetch(this.props.reposUrl);
            const repos = await res.json();
            this.setState({ repos, loading: false});
        }
        catch (e) {
        }
    }

    render() {
        const { repos, loading, rVisible } = this.state;
        if (loading) {
            return (
                <div className="repos">
                    <Loading {...{ loadingGif }} />
                </div>
            );
        }
        return (
            <div className="repos" style="{(this.props.rVisible)? (heigth: 500px) : (heigth:0)}">
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