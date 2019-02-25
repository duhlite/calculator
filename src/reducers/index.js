import {ADD_NUM, FUNC_ACTION, EQUAL, CLEAR, DECIMAL} from '../constants/index';

const initialState = {
    display: '0',
    currentValue: '',
    previousValue: '',
    lastClicked: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM: {
            return {
                ...state,
                display: state.display === '0' ?action.payload : state.display + action.payload,
                currentValue: state.currentValue.length === 0 ? action.payload : state.currentValue + action.payload,
                lastClicked: action.payload
            }
        }
        case CLEAR: {
            return {
                ...state,
                display: '0',
                currentValue: '',
                previousValue: '',
                lastClicked: ''
            }
        }
        case FUNC_ACTION: {
            return {
                ...state,
                display: state.lastClicked.match(/[*+/-]/) ?
                state.display.slice(0,-1) + action.payload : state.display + action.payload,
                previousValue: state.currentValue,
                currentValue: '',
                lastClicked: action.payload

            }
        }
        case EQUAL: {
            return {
                ...state,
                display: action.payload,
                currentValue: action.payload,
                previousValue: '',
                lastClicked:''
            }
        }   
        case DECIMAL: {
            return {
                ...state,
                display: state.currentValue.includes('.') ? state.display : state.display + action.payload,
                currentValue: state.currentValue.includes('.') ? state.currentValue : state.currentValue + action.payload,
                lastClicked: action.payload
            }
        } 
    
        default:
            return state;
    }
};

export default rootReducer;