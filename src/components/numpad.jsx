import React, {Component} from 'react';
import {numBank} from './numBank';
import NumButton from './num-button';


class Numpad extends Component {

    render() {
        let numPad = numBank.map((el,i,numArr) =>{
            return (
                <NumButton
                    key = {numArr[i].id}
                    id = {numArr[i].id}
                    num = {numArr[i].num}
                />
            )
        })
        return (
            <div className='numpad'>
                {numPad}
            </div>
        )
    }
}

export default Numpad;