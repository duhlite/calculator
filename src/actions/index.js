import {ADD_NUM, FUNC_ACTION} from '../constants/index';
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
