import { combineReducers } from 'redux';
import MoodsState from './Moods/MoodsState';
import CausesState from './Causes/CausesState';
import PunchlogState from './Punchlog/Punchlog';
import UserState from './User/UserState';

const rootReducer = combineReducers({
  punchlog: PunchlogState,
  user: UserState,
  moods: MoodsState,
  causes: CausesState,
});

export default rootReducer;
