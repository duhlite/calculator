import React, {Component} from 'react';
import {connect} from 'react-redux';
import {equalEquation} from '../actions/index';
import * as math from 'mathjs';


const mapStateToProps = state => {
    return {eq: state.display}
}

function mapDispatchToProps(dispatch) {
    return {
        equalEquation: equal => dispatch(equalEquation(equal))
    }
}

class ConnectedEqualButton extends Component {

    handleClick = () => {
        const equal = math.eval(this.props.eq);
        this.props.equalEquation(equal);
    }

    render() {
        return (
            <button id='equals' onClick={this.handleClick}>
                =
            </button>
        )
    }
}

const EqualButton = connect(mapStateToProps,mapDispatchToProps)(ConnectedEqualButton);

export default EqualButton;