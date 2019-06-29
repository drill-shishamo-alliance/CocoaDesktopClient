import { combineReducers } from 'redux';
import FeelingsState from './Feelings/FeelingsState';
import CausesState from './Causes/CausesState';
import AppState from './App/AppState';
import UserState from './User/UserState';

const rootReducer = combineReducers({
  app: AppState,
  user: UserState,
  feelings: FeelingsState,
  causes: CausesState,
});

export default rootReducer;
