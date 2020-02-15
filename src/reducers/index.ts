import { combineReducers } from 'redux';
import MoodsState from './Moods/MoodsState';
import CausesState from './Causes/CausesState';
import AppState from './App/AppState';
import UserState from './User/UserState';

const rootReducer = combineReducers({
  app: AppState,
  user: UserState,
  moods: MoodsState,
  causes: CausesState,
});

export default rootReducer;
