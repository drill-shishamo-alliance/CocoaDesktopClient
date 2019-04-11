import { combineReducers } from 'redux';
import screenState from './Screen/ScreenState';
import feelingState from './Feeling/FeelingState';
import couseOfFeelingState from './CauseOfFeeling/CauseOfFeelingState';

const rootReducer = combineReducers({
    screenState,
    feelingState,
    couseOfFeelingState
});

export default rootReducer;
