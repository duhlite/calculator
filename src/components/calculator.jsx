import React from 'react';
import Numpad from './numpad';
import Clear from './clear-button';
import FunctionButtons from './function-buttons';
import Display from './display';

const Calculator = () => {
    return (
        <div id='calculator'>
            <Display />
            <Numpad />
            <Clear />
            <FunctionButtons />
        </div>
    )
}

export default Calculator;