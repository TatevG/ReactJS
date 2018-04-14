import React from "react";
import { connect } from "react-redux";
import { increase } from '../js/actions/increase';

const mapDispatchToProps = dispatch => {
    return {
        increase: counter => dispatch(increase(counter))
    };
};

const mapStateToProps = store => {
    return { counter: store.counter };
};

class Form extends React.Component {
    constructor() {
        super();
    }

    clickHandler = () => {
        const { counter } = this.props;
        this.props.increase(counter);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler} value={this.props.counter}>Click</button>
                <p>{this.props.counter}</p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);