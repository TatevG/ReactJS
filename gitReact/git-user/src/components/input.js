import React from 'react';

export default
    class Input extends React.Component {
    render() {
        return (
            <form >
                <label>Git Username:
                <input type="text" id="clickInput" onChange={this.props.handleChange}/>
                </label>
                <input type="submit" id="btn" value="Submit" onSubmit={this.handleSubmit}/>
            </form>
        );
    }
}