import * as ActionCreators from './FeelingAndCausesActionCreator';
import { ActionType } from 'typesafe-actions';

type FeelingAndCausesAction = ActionType<typeof ActionCreators>;
export default FeelingAndCausesAction;
