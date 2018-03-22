import React from 'react';

export default
    class Input extends React.Component {
    render() {
        return (
            <div>
                <label>Git Username:
                <input type="text" onChange={this.props.changeHandler} />
                </label>
                <input type='button' value='Check' onClick={this.props.change} />
            </div>
        );
    }
}