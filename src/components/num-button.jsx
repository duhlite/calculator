import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNum} from '../actions/index';


function mapDispatchToProps(dispatch) {
    return {
        addNum: num => dispatch(addNum(num))
    };
}

class ConnectedNumButton extends Component {

    handleClick = () => {
        const num = this.props.num;
        this.props.addNum(num);
    }

    render() {
        return (
            <button className='calc-button'
            id={this.props.id} onClick={this.handleClick}>
            {this.props.num}
            </button>
        )
    }
}

const NumButton = connect(null,mapDispatchToProps)(ConnectedNumButton)

export default NumButton;