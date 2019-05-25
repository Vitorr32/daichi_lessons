import { combineReducers } from 'redux'
import { OPEN_DAICHI_MODAL, CLOSED_DAICHI_MODAL, CLOSING_DAICHI_MODAL } from './action_types';

const sessionState = {
};

export function sessionReducer(state = sessionState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

const daichiState = {
    opening: false,
    closing: false,
    selectedChapter: null,
    selectedBounds: null
}

export function daichiReducer(state = daichiState, action) {
    switch (action.type) {
        case OPEN_DAICHI_MODAL:
            return { ...state, opening: true, selectedChapter: action.payload.chapter, selectedBounds: action.payload.bounds };
        case CLOSING_DAICHI_MODAL:
            return { ...state, opening: false, closing: true }
        case CLOSED_DAICHI_MODAL:
            return { ...state, closing: false, selectedChapter: null, selectedBounds: null };
        default:
            return state;
    }
}

export default combineReducers({
    session: sessionReducer,
    daichi: daichiReducer
})