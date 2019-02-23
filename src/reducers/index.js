import {ADD_NUM} from '../constants/index';
import {CLEAR} from '../constants/index';

const initialState = {
    display: [0]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM: {
            return {
                ...state,
                display: state.display.concat(action.payload)
            }
        }
        case CLEAR: {
            return {
                ...state,
                display: [0]
            }
        }
            
    
        default:
            return state;
    }
};

export default rootReducer;