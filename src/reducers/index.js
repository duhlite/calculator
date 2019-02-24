import {ADD_NUM, FUNC_ACTION, EQUAL, CLEAR} from '../constants/index';

const initialState = {
    display: '0',
    currentValue: '',
    previousValue: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM: {
            return {
                ...state,
                display: state.display === '0' ?action.payload : state.display + action.payload,
                currentValue: state.currentValue.length === 0 ?
                action.payload : state.currentValue + action.payload
            }
        }
        case CLEAR: {
            return {
                ...state,
                display: '0',
                currentValue: '',
                previousValue: ''
            }
        }
        case FUNC_ACTION: {
            return {
                ...state,
                display: state.display === '0' ?
                state.display : state.display + action.payload,
                previousValue: state.currentValue,
                currentValue: ''
            }
        }
        case EQUAL: {
            return {
                ...state,
                display: action.payload,
                currentValue: action.payload,
                previousValue: ''
            }
        }    
    
        default:
            return state;
    }
};

export default rootReducer;