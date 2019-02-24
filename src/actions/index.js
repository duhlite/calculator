import {ADD_NUM, FUNC_ACTION, EQUAL} from '../constants/index';
import {CLEAR} from '../constants/index';

export function addNum(payload) {
    return {type: ADD_NUM, payload}
};

export function clearData(payload) {
    return {type: CLEAR, payload}
};

export function funcAction(payload) {
    return {type: FUNC_ACTION, payload}
};

export function equalEquation(payload) {
    return {type: EQUAL, payload}
};