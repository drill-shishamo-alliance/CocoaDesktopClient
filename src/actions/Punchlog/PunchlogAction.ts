import * as ActionCreators from './PunchlogActionCreator';
import { ActionType } from 'typesafe-actions';

type PunchlogAction = ActionType<typeof ActionCreators>;
export default PunchlogAction;
