import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './reducer/UserReducer';
import thunk from "redux-thunk";

const rootReducer= combineReducers({
    userReducer: userReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk))  
