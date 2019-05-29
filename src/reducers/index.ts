import { combineReducers } from 'redux';
import screenState from './Screen/ScreenState';
import feelingAndCausesState from './FeelingsAndCauses/FeelingsAndCauses';

const rootReducer = combineReducers({
  screenState,
  feelingAndCausesState,
});

export default rootReducer;
