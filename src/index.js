// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from 'redux';

//create reducer, takes state and action as params
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            state = state + action.payload;
            break;
        case 'SUBTRACT':
            state = state - action.payload;
            break;
    }
    return state;
};
//create store, takes reducer and initial state as params
const store = createStore(reducer,1);
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