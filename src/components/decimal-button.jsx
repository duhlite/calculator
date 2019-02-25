import React, {Component} from 'react';
import {connect} from 'react-redux';
import {decimalAdd} from '../actions/index';


function mapDispatchToProps(dispatch) {
    return {
        decimalAdd: num => dispatch(decimalAdd(num))
    };
}

class ConnectedDecButton extends Component {

    handleClick = () => {
        const num = '.';
        this.props.decimalAdd(num);
    }

    render() {
        return (
            <button className='calc-button'
            id='decimal' onClick={this.handleClick}>
            .
            </button>
        )
    }
}

const DecimalButton = connect(null,mapDispatchToProps)(ConnectedDecButton)

export default DecimalButton;