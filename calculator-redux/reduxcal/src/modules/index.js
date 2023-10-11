import { combineReducers } from 'redux';
import calculatorReducer from './calculator';
import todoListReducer from './todolist';
// import {configureStore} from '@reduxjs/toolkit'
// import {logger} from 'redux-logger';

const rootReducer = combineReducers({
  calculatorReducer,
  todoListReducer
});



export default rootReducer;