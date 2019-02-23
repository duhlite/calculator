import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNum} from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        addNum: add => dispatch(addNum(add))
    }
}

class ConnectedFuncButton extends Component {

    handleClick = () => {
        const add = this.props.sym;
        this.props.addNum(add);
    }

    render() {
        return (
            <button className='calc-button' onClick={this.handleClick}>
                {this.props.sym}
            </button>
        )
    }
}

const FuncButton = connect(null, mapDispatchToProps)(ConnectedFuncButton);

export default FuncButton;