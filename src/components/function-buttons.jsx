import React, {Component} from 'react';
import {funcBank} from './numBank';
import FuncButton from './func-button';

class FunctionButtons extends Component {
    render() {
        let funcPad = funcBank.map((el,i,numArr) =>{
            return (
                <FuncButton
                    key = {numArr[i].id}
                    id = {numArr[i].id}
                    sym = {numArr[i].sym}
                />
            )
        })
        return(
            <div>
                {funcPad}
            </div>
        )
    }
}

export default FunctionButtons;