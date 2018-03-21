import React from 'react';
import loading from '../images/loading.gif';

export default 
class GitUser extends React.Component{
    render() {
        return (
            <div>
                <input type="text" id="gitInput"/>
                <input type="button" id="btn" value="Check" onClick={this.props.changeHandler} />
            </div>
        );
    }
}