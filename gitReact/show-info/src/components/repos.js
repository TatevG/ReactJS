import React from 'react';
import '../stylesheets/input.css';


class Repos extends React.PureComponent{
    constructor(user) {
        super(user);
        this.state = {
            repos: null,
            repoNames: user.repos_url
        };
    }
    async componentDidMount (){
        const { repoNames } = this.state;
        let repos = null;
        console.log(repoNames);
        try {
            const res = await fetch(`${repoNames}`);
            repos = await res.json();
            console.log(repos);
        }
        catch (e) {
            console.log(e);
         }
        this.setState({ repoNames });
    }

    render() {
        const { repoNames} = this.state;
        return (
            <div className="repos">
                {repoNames}
            </div>
        );
    }
}
export default Repos