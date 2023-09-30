import { combineReducers } from 'redux';
import calculatorReducer from './calculator';

const rootReducer = combineReducers({
  calculatorReducer,
});

export default rootReducer;