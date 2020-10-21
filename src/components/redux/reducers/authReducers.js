import { AUTHENTICATION } from '../actions/types'; 

const INITIAL_STATE = {
    authToken: null,
};

const authReducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTHENTICATION:
            return {...state, authToken: action.payload};
        default:
            return state;
    }
}

export default authReducers;