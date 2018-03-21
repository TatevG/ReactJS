import React from 'react';
import loading from '../images/loading.gif';

export default 
class GitUser extends React.Component{
    // constructor() {
    //     super();
    //     console.log('constructor');
    //     this.state = {
    //         user: null
    //     };
    // }
    // async componentDidMount() {
    //     console.log('cdm');
    //     let user;
    //     try {
    //         const result = await fetch('https://api.github.com/users/narghev');
    //         user = await result.json();
    //     }
    //     catch (e) {
    //         user = null;
    //     }

    //     this.setState({ user });
    // }
    render() {
        return (
            <div>
                <input type="text" id="gitInput"/>
                <input type="button" id="btn" value="Check" onClick={this.props.changeHandler} />
            </div>
        );
    }
}