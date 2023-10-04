import { combineReducers } from 'redux';
import calculatorReducer from './calculator';
import todoListReducer from './todolist';

const rootReducer = combineReducers({
  calculatorReducer,
  todoListReducer
});

export default rootReducer;