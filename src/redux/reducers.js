import { combineReducers } from 'redux'

const sessionState = {
};

export function sessionReducer(state = sessionState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    session: sessionReducer
})