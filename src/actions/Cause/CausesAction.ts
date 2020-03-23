import * as ActionCreators from './CausesActionCreator';
import { ActionType } from 'typesafe-actions';

type CausesAction = ActionType<typeof ActionCreators>;
export default CausesAction;
