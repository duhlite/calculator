import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {display: state.display.join(' ')}
}

class ConnectedDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.display}
            </div>
        )
    }
}

const Display = connect(mapStateToProps)(ConnectedDisplay);

export default Display;