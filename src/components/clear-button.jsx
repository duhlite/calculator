import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearData} from '../actions/index';

function mapDispatchToProps(dispatch)  {
    return {
        clearData: clear => dispatch(clearData(clear))
    }
}

class ConnectedClear extends Component {

    handleClick = () => {
        const clear = '0';
        this.props.clearData(clear);
    }

    render() {
        return (
            <button id='clear' onClick={this.handleClick} className='calc-button'>
                Clear
            </button>
        )
    }
}

const Clear = connect(null,mapDispatchToProps)(ConnectedClear)

export default Clear;