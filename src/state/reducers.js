import { combineReducers } from "@reduxjs/toolkit";

const deviceTheme = window.matchMedia('(prefers-color-scheme:light)').matches
function isLight(state=deviceTheme, action){
    switch (action.type) {
        case 'TOGGLE_THEME':
            return !state
        default:
            return state
    }
}

function menuOpen(state=false, action){
    switch (action.type) {
        case 'TOGGLE_MENU':
            return !state
        default:
            return state
    }
}

function exportList(state=[], action){
    switch (action.type) {
        case 'ADD_EXPORT_ITEM':
            return [ ...state, action.payload ];
        case 'REMOVE_EXPORT_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state
    }
}

const reducer = combineReducers({
    isLight,
    menuOpen,
    exportList,
  });
  
  export default reducer;