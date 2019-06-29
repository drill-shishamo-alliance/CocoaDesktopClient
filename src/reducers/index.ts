import { combineReducers } from 'redux';
import FeelingsState from './Feelings/FeelingsState';
import CausesState from './Causes/CausesState';
import AppState from './App/AppState';

const rootReducer = combineReducers({
  app: AppState,
  feelings: FeelingsState,
  causes: CausesState,
});

export default rootReducer;
