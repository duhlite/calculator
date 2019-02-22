import {ADD_NUM} from '../constants/index';

const initialState = {
    display: ''
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM: {
            return {
                ...state,
                display: state.display.concat(action.payload)
            }
        }
            
    
        default:
            return state;
    }
};

export default rootReducer;