import React, {Component} from 'react';
import {connect} from 'react-redux';
import {funcAction} from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        funcAction: add => dispatch(funcAction(add))
    }
}

class ConnectedFuncButton extends Component {

    handleClick = () => {
        const add = this.props.sym;
        this.props.funcAction(add);
    }

    render() {
        return (
            <button className='calc-button' onClick={this.handleClick}
            id={this.props.id}>
                {this.props.sym}
            </button>
        )
    }
}

const FuncButton = connect(null, mapDispatchToProps)(ConnectedFuncButton);

export default FuncButton;