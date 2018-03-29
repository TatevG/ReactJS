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
            // console.log(e);
         }
        this.setState({ repoNames });
    }

    render() {
        console.log(this.repoNames);
        return (
            <div className="repos">
                {this.repoNames}
            </div>
        );
    }
}
export default Repos








// let searchTerm;

// class Repos extends React.Component {

//     constructor(props) {
//         super(props);
//         this.onClick = this.onClick.bind(this);
//         this.state = { repositories: [] };
//     }


//     render() {
//         return (
//             <div>
//                 <form>
//                     <input type="text" className="repos" ref={(input) => { this.repos = input; }} />
//                     <button onClick={this.onClick}>Search</button>
//                 </form>
//                 <div className="foundRepo">{this.props.name}</div>
//                 <h2>Repositories</h2>
//                 <ul>
//                     {this.state.repositories.map((item, index) => (
//                         <li key={index}>
//                             {item.name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }

//     onClick(event) {

//         searchTerm = this.repos.value;
//         let endpoint = 'https://api.github.com/users/' + searchTerm + '/repos';
//         console.log(searchTerm);
//         fetch(endpoint)
//             .then(blob => blob.json())
//             .then(response => {
//                 this.setState({ repositories: response.items });
//             });
//         event.preventDefault();

//     }
// }

