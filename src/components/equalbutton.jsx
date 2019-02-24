import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {eq: state.display}
}

class ConnectedEqualButton extends Component {

    handleClick = () => {
        console.log(this.props.eq)
    }

    render() {
        return (
            <button id='equals' onClick={this.handleClick}>
                =
            </button>
        )
    }
}

const EqualButton = connect(mapStateToProps)(ConnectedEqualButton);

export default EqualButton;