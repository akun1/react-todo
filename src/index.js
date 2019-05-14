// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore, combineReducers } from 'redux';

//create initial state object
const initialState = {
    result: 1,
    lastValues: []
}
//create reducer, takes state and action as params
//can give State a default value so that if not passed a new value
//it will just use default value
const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};
const userReducer = (state = {
    name: "akash",
    age: 22
}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            }
            break;
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
};
//create store, takes reducer and initial state as params
//but if reducer has defualt value, then create store doesnt
//need initial state as param
//const store = createStore(reducer,1);
const store = createStore(combineReducers({mathReducer, userReducer}));
//subscribe to store changes
store.subscribe(() => {
    console.log("store updated", store.getState());
});
//perform a function on the store with dispatch.
//Requires a type and payload
store.dispatch({
    type: "ADD",
    payload: 10
});
store.dispatch({
    type: "SUBTRACT",
    payload: 5
});